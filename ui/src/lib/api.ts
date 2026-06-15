import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // important to send cookies
});

// Response interceptor to handle 401 globally
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    if (error.response?.status === 401) {
      window.location.href = `/`;
    }
    return Promise.reject(error);
  },
);

export default api;
