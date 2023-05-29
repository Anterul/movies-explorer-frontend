import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";

function ProtectedRoute({ element: Component, ...props }) {
  const value = useContext(LoggedInContext);
  return value.state ? (
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default ProtectedRoute;