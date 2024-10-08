import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Use your authentication logic here

  return isAuthenticated ? <Component /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;
