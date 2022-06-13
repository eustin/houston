const express = require("express");
const cors = require("cors");

const launchesRouter = require("./routes/launches.router");

app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/launches", launchesRouter);

module.exports = app;
