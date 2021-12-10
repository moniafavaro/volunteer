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
  const response = await axios(config);
  return response.data;
};

export const login = async (data) => {
  return makeAxiosRequest("auth/login/", data, "post");
};

export const register = async (data) => {
  return makeAxiosRequest("auth/register/", data, "post");
};

export const fetchVolunteersByJobId = async (id) => {
  return makeAxiosRequest(`jobs/${id}/volunteers/`, null, "get");
};

export const addVolunteer = async (data) => {
  return makeAxiosRequest("volunteers/", data, "post");
};

export const updateVolunteer = async (id, data) => {
  return makeAxiosRequest(`volunteers/${id}/`, data, "put");
};

export const fetchVolunteerByUserId = async (id) => {
  return makeAxiosRequest(`volunteers/?userId=${id}`, null, "get");
};

export const fetchJobsForCompany = async (id) => {
  return makeAxiosRequest(`companies/${id}/jobs/`, null, "get");
};

export const fetchCompanyByUserId = async (id) => {
  return makeAxiosRequest(`companies/?userId=${id}`, null, "get");
};

export const addCompany = async (data) => {
  return makeAxiosRequest("companies/", data, "post");
};

export const updateCompany = async (id, data) => {
  return makeAxiosRequest(`companies/${id}/`, data, "put");
};

export const addJob = async (data) => {
  return makeAxiosRequest("jobs/", data, "post");
};

export const updateJob = async (id, data) => {
  return makeAxiosRequest(`jobs/${id}/`, data, "put");
};

export const fetchAllJobs = async () => {
  return makeAxiosRequest("jobs/?closed=False", null, "get");
};

export const fetchJobById = async (id) => {
  return makeAxiosRequest(`jobs/${id}/`, null, "get");
};
