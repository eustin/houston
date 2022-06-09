const express = require("express");
const httpGetUpcomingLaunches = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetUpcomingLaunches);

module.exports = launchesRouter;
