const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.LAUNCH_API_BASE_URL,
});

async function getUpcomingLaunches() {
  const response = await axiosInstance.get("/launch/upcoming/", {
    params: {
      limit: 5,
      ordering: "",
      hide_recent_previous: true,
      mode: "list",
    },
  });

  if (response.status !== 200) {
    throw new Error("Error getting upcoming launches");
  }

  const results = response.data.results.map(
    ({ id, slug, name, status, net, lsp_name, location, image }) => {
      return { id, slug, name, status, net, lsp_name, location, image };
    }
  );

  return results;
}

module.exports = getUpcomingLaunches;
