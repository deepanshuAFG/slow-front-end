import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const AuthGuard = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/HomePage");
    }
  }, [token, navigate]);

  if (token) {
    return null; // Prevent rendering children during redirection
  }

  return children;
};

export default AuthGuard;
