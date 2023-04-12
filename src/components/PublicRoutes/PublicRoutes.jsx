import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({
  component: Component,
  redirectTo = "/user",
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PublicRoutes;
