import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://chat-application-2-b4kp.onrender.com/api",
  withCredentials: true,
});
