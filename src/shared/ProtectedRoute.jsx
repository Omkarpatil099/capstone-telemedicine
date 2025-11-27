import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("patientToken");

  return token ? children : <Navigate to="/patient/login" replace />;
}
