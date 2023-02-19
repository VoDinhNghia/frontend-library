import axios from 'axios';
import authHeader from './authHeader';
import { API_URL } from '../common/constant';

class LibraryService {
  getInfoLibrary() {
    return axios.get(`${API_URL}libraries/`, { headers: authHeader() });
  }
}

export default new LibraryService();
