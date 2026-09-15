/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useUser } from "../Features/Authentication/useUser";
import Loader from "./Loader";
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  if (isLoading) return <Loader />;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
