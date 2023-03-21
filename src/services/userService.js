import axios from "axios";
import { authHeader } from "./authHeader";
import { API_URL } from "../common/constant";

class UserService {
  getAllUsers() {
    return axios
      .get(`${API_URL}/api/users/`, { headers: authHeader(), params: { limit: 10, page: 1 } })
      .then((res) => {
        return res.data || [];
      });
  }
}

export default new UserService();
