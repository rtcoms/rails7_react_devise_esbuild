import axios from "axios";

export function fetchUserProfile() {
  const jwtToke = window.localStorage.getItem("token");

  return axios.get("/api/users/profile.json", {
    headers: {
      Authorization: `Bearer ${jwtToke}`
    }
  });
}