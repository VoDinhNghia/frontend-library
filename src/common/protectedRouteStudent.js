import { Navigate } from "react-router-dom";
import AuthService from "../services/authService";
import { roles, routes } from "./constant";

const PrivateRouteStudent = ({ children }) => {
  const user = AuthService.getCurrentUser();
  const isAdmin = user?.role?.includes(roles.STUDENT);
  return isAdmin ? children : <Navigate to={routes.LOGIN} />;
};
export default PrivateRouteStudent;
