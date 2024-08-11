import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../../config";

const genericGet = async (
  url: string,
  params = {},
  requestConfig: AxiosRequestConfig = {}
) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const genericPost = async (
  url: string,
  data = {},
  requestConfig: AxiosRequestConfig = {}
) => {
  try {
    const response = await axiosInstance.post(url, data, { ...requestConfig });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const genericPut = async (
  url: string,
  data = {},
  requestConfig: AxiosRequestConfig = {}
) => {
  try {
    const response = await axiosInstance.put(url, data, { ...requestConfig });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const genericDelete = async (
  url: string,
  requestConfig: AxiosRequestConfig = {}
) => {
  try {
    const response = await axiosInstance.delete(url, { ...requestConfig });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { genericGet, genericPost, genericPut, genericDelete };
