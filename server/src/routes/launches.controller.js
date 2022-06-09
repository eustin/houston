const getUpcomingLaunches = require("../models/launches.model");

async function httpGetUpcomingLaunches(req, res) {
  const upcomingLaunches = await getUpcomingLaunches();
  return res.status(200).json(upcomingLaunches);
}

module.exports = httpGetUpcomingLaunches;
