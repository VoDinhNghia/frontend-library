import axios from "axios";
import authHeader from "./authHeader";
import { API_URL } from "../common/constant";
import { NotificationManager } from "react-notifications";

class LibraryService {
  getInfoLibrary() {
    return axios.get(`${API_URL}/api/library/`, { headers: authHeader() });
  }

  async updateInfo(id, body) {
    try {
      const res = await axios.put(`${API_URL}/api/library/${id}`, body, {
        headers: authHeader(),
      });
      if (res.data?.statusCode !== 200) {
        NotificationManager.error(res.data?.message, "Update library", 2000);
      } else {
        NotificationManager.success(res.data?.message, "Update library", 2000);
      }
      return res.data || {};
    } catch (err) {
      NotificationManager.error(
        err?.response?.data?.message,
        "Update library",
        2000
      );
    }
  }
}

export default new LibraryService();
