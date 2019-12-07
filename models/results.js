const { Schema, model } = require("mongoose");

const Results = new Schema({
  event: { type: String, required: true },
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});

module.exports = model("Results", Results);
