const Result = require("../models/results");
const Event = require("../models/events");
const to = require("../utils/to");

exports.recordResults = async (req, res) => {
  let err, event;

  [err, event] = await to(Event.findOne({ eventID: req.body.eventID }));
  console.log("Event is ", event);
  const first = new Result({
    event: event.name,
    name: req.body.firstName,
    class: req.body.firstClass,
    section: req.body.firstSection,
    position: "first"
  });
  [err] = await to(first.save());
  if (err) return res.status(500).send({ success: false, err });

  const second = new Result({
    event: event.name,
    name: req.body.secondName,
    class: req.body.secondClass,
    section: req.body.secondSection,
    position: "second"
  });
  [err] = await to(second.save());
  if (err) return res.status(500).send({ success: false, err });

  const third = new Result({
    event: event.name,
    name: req.body.thirdName,
    class: req.body.thirdClass,
    section: req.body.thirdSection,
    position: "third"
  });
  [err] = await to(third.save());
  if (err) return res.status(500).send({ success: false, err });

  return res.status(200).send({ success: true, msg: "Results Recorded" });
};

exports.getResults = async (req, res) => {
  let [err, data] = await to(Result.find(req.body));
  if (err) return res.status(500).send({ success: false, err, data });

  return res.status(200).send({ success: true, err, data });
};
