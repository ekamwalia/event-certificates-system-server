// Loading environment variables from `.env`
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const router = require("./routes");

// Establish Dabatase Connection
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", err => {
  console.log("[ERROR] ${err}");
});
db.once("open", () => {
  console.log("[SUCCESS] DB Connected");
});

// App Setup
const app = express();
app.use(bodyParser.json());
app.use("/", router);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
