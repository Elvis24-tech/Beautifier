import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    return <Navigate to="/admin-login" />;
  }

  if (!user.is_admin) {
    return <Navigate to="/buyer" />;
  }

  return children;
}

export default AdminRoute;