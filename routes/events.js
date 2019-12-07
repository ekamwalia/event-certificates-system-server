const Event = require("../models/events");
const to = require("../utils/to");

exports.getEventList = async (req, res) => {
  let err, events;

  [err, events] = await to(Event.find({}, { eventID: 1, name: 1 }));
  if (err)
    return res
      .status(500)
      .send({ success: false, msg: "Internal Server Error" });

  return res.status(200).send({ success: true, data: events });
};

exports.insertEvent = async (req, res) => {
  let err;

  const event = new Event({ eventID: req.body.eventID, name: req.body.name });
  [err] = await to(event.save());

  if (err)
    return res
      .status(500)
      .send({ success: false, msg: "Could not insert event", data: err });

  return res.status(200).send({ success: true, msg: "Event Inserted" });
};
