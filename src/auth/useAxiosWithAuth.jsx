import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const useAxiosWithAuth = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Get logout function from AuthProvider
  const instance = axios.create({
    baseURL: "http://localhost:8080/slow/api",
  });

  // Attach token
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const handleLogout = () => {
    logout(); // Call the logout function (remove `token` unless needed)
    navigate("/"); // Redirect to home page
};

  // Handle 401 error
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        if (window.location.pathname !== "/") {
            handleLogout();
          }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosWithAuth;
