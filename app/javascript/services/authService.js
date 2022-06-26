import axios from "axios";

export function register(data) {
  return axios.post('/api/users', data);
}

export function signOut(currentUserToken) {
  window.localStorage.clear();
}

