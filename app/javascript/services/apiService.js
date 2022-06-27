import axios from "axios";

export function fetchUserProfile() {
  const jwtToken = window.localStorage.getItem("token");

  return axios.get("/api/users/profile.json", {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  });
}

export function createInvitation(data) {
  const jwtToken = window.localStorage.getItem("token");

  return axios.post("/api/invitation/create", data,{
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  });
}