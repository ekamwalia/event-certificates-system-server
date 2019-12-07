const events = require("./events");
const results = require("./results");

const router = require("express").Router();

router.get("/getEventList", events.getEventList);
router.post("/insertEvent", events.insertEvent);
router.post("/recordResults", results.recordResults);
router.post("/getResults", results.getResults);

module.exports = router;
