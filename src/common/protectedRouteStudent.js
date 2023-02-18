import { Navigate } from 'react-router-dom';
import AuthService from "../services/authService";
import { roles } from './constant';
  
const PrivateRouteStudent = ({ children }) => {
    const user = AuthService.getCurrentUser();
    const isAdmin = user.role.includes(roles.STUDENT)
    return isAdmin ? children : <Navigate to="/login" />;
};
export default PrivateRouteStudent;