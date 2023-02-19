import axios from "axios";
import authHeader from "./authHeader";
import { API_URL } from "../common/constant";

class LibraryService {
  getInfoLibrary() {
    return axios.get(`${API_URL}libraries/`, { headers: authHeader() });
  }

  updateInfo(id, body) {
    return axios
      .put(`${API_URL}libraries/${id}`, body, { headers: authHeader() })
      .then((response) => {
        return response.data || {};
      });
  }
}

export default new LibraryService();
