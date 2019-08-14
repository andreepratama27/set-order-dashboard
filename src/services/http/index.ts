import axios from "axios";

export const http = (token = null) => {
  return axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    headers: {
      Accept: "application/json",
      Content: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `${token}`
    }
  });
};
