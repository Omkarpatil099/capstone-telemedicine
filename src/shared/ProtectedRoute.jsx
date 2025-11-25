import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/patient/login" />;
}