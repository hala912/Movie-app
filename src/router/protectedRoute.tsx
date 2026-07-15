import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const ProtectedRoute = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.username);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;