import axios from "axios";
import jwtDecode from "jwt-decode"

export function register(data) {
  return axios.post(`/api/users`, data);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

