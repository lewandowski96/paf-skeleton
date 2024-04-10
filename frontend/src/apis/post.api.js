import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

export const POSTAPI = {
  getPosts: () => axios.get(`${BASE_URL}/api/posts`),
};
