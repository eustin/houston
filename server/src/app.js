const express = require("express");

const launchesRouter = require("./routes/launches.router");

app = express();
app.use(express.json());

app.use("/launches", launchesRouter);

module.exports = app;
