import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated = false,
  redirectPath = "/login",
  children,
}: {
  isAuthenticated?: boolean;
  redirectPath?: string;
  children?: JSX.Element;
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
