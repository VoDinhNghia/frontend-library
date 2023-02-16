import axios from "axios";

const API_URL = "http://localhost:3002/auth";

class AuthService {
  login(email, passWord) {
    return axios
      .post(`${API_URL}/login`, {
        email,
        passWord
      })
      .then(response => {
        if (response.data.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
