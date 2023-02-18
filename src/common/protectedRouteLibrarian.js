import { Navigate } from 'react-router-dom';
import AuthService from "../services/authService";
import { roles } from './constant';
  
const PrivateRouteLibrarian = ({ children }) => {
    const user = AuthService.getCurrentUser();
    const isAdmin = user.role.includes(roles.LIBRARIAN)
    return isAdmin ? children : <Navigate to="/login" />;
};
export default PrivateRouteLibrarian;