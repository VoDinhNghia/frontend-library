import axios from 'axios';
import authHeader from './authHeader';
import { API_URL } from '../common/constant';

class UserService {
  getAllUsers() {
    return axios.get(`${API_URL}users/`, { headers: authHeader() });
  }
}

export default new UserService();
