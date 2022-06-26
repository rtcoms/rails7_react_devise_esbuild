import axios from "axios";
import jwtDecode from "jwt-decode"
import useStore from "../store";

export function register(data) {
  return axios.post('/api/users', data);
}

export function getCurrentUser() {
  try {
    const currentUserToken = localStorage.getItem("token");
    return jwtDecode(currentUserToken);
  } catch (error) {
    return null;
  }
}

