import axios from "axios";
import { localStorageItem } from "../common/constant";
import { routes } from "../common/constant";
const API_URL = "http://localhost:3002/auth";

class AuthService {
  login(email, passWord) {
    return axios
      .post(`${API_URL}${routes.LOGIN}`, {
        email,
        passWord
      })
      .then(response => {
        if (response.data.data.accessToken) {
          localStorage.setItem(localStorageItem.USER, JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem(localStorageItem.USER);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(localStorageItem.USER));;
  }
}

export default new AuthService();
