import axios from "axios";
import launchesObjStatic from "../mocks/api/httpGetLatestLaunches";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOUSTON_API_URL,
});

const httpGetLatestLaunches = async () => {
  try {
    const response = await axiosInstance.get("/launches");
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Error fetching launches from Houston API");
    throw err;
  }
};

const httpGetLatestLaunchesStatic = async () => {
  try {
    const response = launchesObjStatic;
    console.log("STATIC RESPONSE", response);
    return response.data;
  } catch (err) {
    console.log("Error fetching launches from STATIC FILE");
    throw err;
  }
};

export { httpGetLatestLaunches, httpGetLatestLaunchesStatic };
