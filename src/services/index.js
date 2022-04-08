import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const http = {
  get: (url, config) =>
    api.get(url, {
      ...config,
    }),
  post: (url, body, config) =>
    api.post(url, body, {
      ...config,
    }),
  put: (url, body, config) =>
    api.put(url, body, {
      ...config,
    }),
  delete: (url, config) =>
    api.get(url, {
      ...config,
    }),
};

export default http;
