import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

const config = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("Authorization")}`,
  },
};

export const USERAPI = {
  login: (data) => axios.post(`${BASE_URL}/api/users/login`, data),
  signup: (data) => axios.post(`${BASE_URL}/api/users/signup`, data),
  getUser: (id) => axios.get(`${BASE_URL}/api/users/${id}`, config),
};
