/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useUser } from "../Features/Authentication/useUser";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <Loader />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
