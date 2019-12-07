const { Schema, model } = require("mongoose");

const Events = new Schema({
  eventID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = model("Events", Events);
