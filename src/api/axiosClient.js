import axios from "axios";

const BASE_URL = "http://localhost:8080"; // change when backend is ready

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const res = await axios.post(`${BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        const newAccessToken = res.data?.accessToken;
        localStorage.setItem("access_token", newAccessToken);

        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;

        return axiosClient(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/patient/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
