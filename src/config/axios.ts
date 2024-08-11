import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: defaultHeaders,
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error?.response);
    return Promise.reject(error);
  }
);

export { axiosInstance };
