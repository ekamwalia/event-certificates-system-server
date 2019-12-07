const certificates = require("./certificates");
const events = require("./events");
const results = require("./results");

const router = require("express").Router();

router.get("/getEventList", events.getEventList);

module.exports = router;
