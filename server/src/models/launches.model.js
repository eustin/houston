const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://lldev.thespacedevs.com/2.2.0",
});

async function getLaunches() {
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
}

module.exports = getLaunches;
