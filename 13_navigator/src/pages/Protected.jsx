import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />;
};

export default Protected;
