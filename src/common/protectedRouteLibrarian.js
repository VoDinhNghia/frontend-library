import { Navigate } from "react-router-dom";
import AuthService from "../services/authService";
import { roles, routes } from "./constant";

const PrivateRouteLibrarian = ({ children }) => {
  const user = AuthService.getCurrentUser();
  const isAdmin = user?.role?.includes(roles.LIBRARIAN);
  return isAdmin ? children : <Navigate to={routes.LOGIN} />;
};
export default PrivateRouteLibrarian;
