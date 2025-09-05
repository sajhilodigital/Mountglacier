import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/auth/api",
  timeout: 10000, // ⏳ 10s
  withCredentials: true, // ✅ send cookies automatically
});

// 🔄 Refresh flag to avoid infinite loops
let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (error: unknown) => void;
}[] = [];

// ✅ Helper to process queued requests after refresh
const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// ✅ RESPONSE interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => axiosInstance(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // 🔄 Call refresh endpoint (cookie handles tokens)
        await axios.post(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/auth/api"
          }/auth/refresh`,
          {},
          { withCredentials: true }
        );

        processQueue(null);
        return axiosInstance(originalRequest); // 🔁 retry original request
      } catch (refreshError) {
        processQueue(refreshError, null);
        window.location.href = "/login"; // 🚪 force logout
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
