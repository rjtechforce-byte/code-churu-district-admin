import axios from "axios";

const API = axios.create({
  baseURL: "https://library-management-backend-op8r.onrender.com/api", // keep /api here so frontend calls use "/district-admin/..." not "/api/..."
  // withCredentials: true // अगर cookies use कर रहे हो तो enable करो
});

// attach token automatically (every request)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // EXACT format: Bearer <token>
  }
  return config;
}, (error) => Promise.reject(error));

export default API;
