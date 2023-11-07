import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = (data = {}) => {
  const { children } = data;
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
