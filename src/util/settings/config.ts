import { ACCESSTOKEN } from "@types";
import axios from "axios";

export const DOMAIN = "https://movieapi.cyberlearn.vn/";

//Cấu hình interceptor
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
    };
    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);
