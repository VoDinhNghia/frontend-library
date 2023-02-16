import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:3002/users/';

class UserService {
  getAllUsers() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new UserService();
