import axios from "axios";

export const getAxiosRequestConfig = (requestUrl, data, method) => {
  const config = {
    method,
    url: `/api/${requestUrl}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return config;
};

export const makeAxiosRequest = async (url, data, method) => {
  const config = getAxiosRequestConfig(url, data, method);
  console.log("config ----->", config);
  const response = await axios(config);
  return response.data;
};

export const login = async (data) => {
  return makeAxiosRequest("auth/login/", data, "post");
};

export const register = async (data) => {
  return makeAxiosRequest("auth/register/", data);
};

export const fetchJobs = async () => {
  const config = {
    method: "get",
    url: "/jobs",
    headers: {},
  };

  const response = await axios(config);
  return response.data;
};
