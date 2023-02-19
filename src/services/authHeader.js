import { localStorageItem } from "../common/constant";
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem(localStorageItem.USER));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}
