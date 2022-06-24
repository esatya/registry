const express = require("express");
const app = express();
const cors = require("cors");
var apiRoutes = require("./api/routes");

app.use(cors());

app.get("/", async function (req, res) {
  res.json({ message: "Hello from Rahat Service" });
});

app.use("/api/v1", apiRoutes);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  res.json(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
    error: err
  });
});

module.exports = app;
