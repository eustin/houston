import axios from "axios";
import launchesObjStatic from "../mocks/api/httpGetLatestLaunches";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOUSTON_API_URL,
});

const IS_DEV = process.env.NODE_ENV === "development";
const IS_PROD = process.env.NODE_ENV === "production";

// Get latest Launches --- from live API
const httpGetLatestLaunches = async () => {
  try {
    const response = await axiosInstance.get("/launches");
    console.log("API RESPONSE", response);
    return response.data;
  } catch (err) {
    console.log("Error fetching launches from Houston API");
    throw err;
  }
};

// Get latest Launches --- from mock data for development
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

// this handles the reassignment of the objects that we want to use for the data fetch
// so that it can be used dynamically anywhere in the codebase
const devApiConfig = {
  httpGetLatestLaunches: httpGetLatestLaunchesStatic,
};

// this spreads and injects the reassigned objects values into a new object variable
const devApis = { ...devApiConfig };
const prodApis = { httpGetLatestLaunches };
// If you want to override using static data in development and call the api to fetch live data for testing
// you should swap out the value for IS_DEV below and make it < prodApis >
const HoustonApis = IS_DEV ? devApis : IS_PROD ? prodApis : prodApis;

export default HoustonApis;
