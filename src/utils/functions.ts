import { decrypt } from "./crypter";
import { Cookies } from "react-cookie";
import { GlobalKeys } from "./constants";

var cookies = new Cookies();

export const getLoggedUser = () => {
  try {
    const loggedUser = cookies.get(GlobalKeys.LoggedUserKey);
    if (loggedUser) {
      return decrypt(loggedUser);
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const logout = () => {
  cookies.remove(GlobalKeys.LoggedUserKey);
  localStorage.clear();
};
