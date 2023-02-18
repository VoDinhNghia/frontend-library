import { localStorageItem } from "../common/constant";
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem(localStorageItem.USER));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
