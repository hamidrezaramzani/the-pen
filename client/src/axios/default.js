import axios from "axios";
const request = axios.create({
  timeout: 5000,
});
let userData = localStorage.getItem("user_pen");
let token = null;
if (userData) {
  token = JSON.parse(userData).user.token;
}

request.interceptors.request.use((config) => {
  config.url = "http://localhost:8000/api/v1/" + config.url;
  config.headers["TOKEN"] = token;
  return config;
});

export default request;
