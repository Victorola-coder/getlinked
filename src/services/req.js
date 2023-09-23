import axios from "axios";

const request = axios.create({
  baseURL: "https://backend.getlinked.ai",
});

export default request;
