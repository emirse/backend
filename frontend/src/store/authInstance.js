import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://localhost:8000";
const authTokens = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${authTokens.token}`,
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    const authTokens = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "";
    req.headers.Authorization = `bearer ${authTokens.token}`;
  }

  const user = jwt_decode(authTokens.token);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  console.log("isExpired :", isExpired);
  if (!isExpired) return req;

  const response = await axios.post(`${baseURL}/api/user/refresh/`, {
    refresh: authTokens.refresh,
  });

  authTokens.token = response.data.token;
  localStorage.setItem("userInfo", JSON.stringify(authTokens));
  req.headers.Authorization = `bearer ${authTokens.token}`;

  return req;
});

export default axiosInstance;
