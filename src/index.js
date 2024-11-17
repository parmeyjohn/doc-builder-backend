const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log("[server]: Server is listening on port ", process.env.PORT);
});
