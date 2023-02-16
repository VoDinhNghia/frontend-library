import { Navigate } from 'react-router-dom';
import AuthService from "../services/authService";
  
const PrivateRoute = ({ children }) => {
    const user = AuthService.getCurrentUser();
    return user ? children : <Navigate to="/login" />;
};
export default PrivateRoute;