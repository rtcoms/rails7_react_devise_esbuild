import axios from "axios";

export function register(data) {
  return axios.post('/api/users', data);
}

export function sign_in(data) {
  return axios.post('/api/users/sign_in', data);
}
