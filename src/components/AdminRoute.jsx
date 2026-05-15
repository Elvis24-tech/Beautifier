import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function AdminRoute({ children }) {
  const token = localStorage.getItem("access");

  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return <Navigate to="/admin-login" replace />;
    }
  } catch (err) {
    localStorage.removeItem("access");
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default AdminRoute;