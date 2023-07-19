import Cookies from "js-cookie";

const authHelpers = {
  getUserFromCookies: () => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      return JSON.parse(userCookie);
    }
    return null;
  },
  isAuthenticated: () => {
    const userCookie = Cookies.get("user");
    const accessTokenCookie = Cookies.get("accessToken");

    return !!userCookie && !!accessTokenCookie;
  },
};

export default authHelpers;
