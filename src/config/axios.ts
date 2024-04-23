import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, Content-Length, X-Requested-With",
  "Access-Control-Allow-Credentials": "true",
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: defaultHeaders,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error?.response);
    return Promise.reject(error);
  }
);

export { axiosInstance };
