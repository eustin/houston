import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOUSTON_API_URL,
});

const httpGetLatestLaunches = async () => {
  try {
    const response = await axiosInstance.get("/launches");
    return response.data;
  } catch (err) {
    console.log("Error fetching launches from Houston API");
    throw err;
  }
};

export { httpGetLatestLaunches };
