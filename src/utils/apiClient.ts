import axios from "axios";
import API_BASE_URL from "../config/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default apiClient;
