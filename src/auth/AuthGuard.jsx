import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const AuthGuard = ({ children }) => {
  const { token } = useAuth();

  return token ? <Navigate to="/HomePage" /> : children;
};

export default AuthGuard;
