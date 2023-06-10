import axios from "axios";

const instance = axios.create({
  baseURL: "https://autumnfish.cn",
  timeout: 1000000,
  headers: {},
});

export default instance;
