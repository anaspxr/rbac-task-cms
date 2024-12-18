import axios from "axios";

const baseURL = "http://localhost:3000";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
