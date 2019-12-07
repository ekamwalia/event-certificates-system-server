// Loading environment variables from `.env`
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
