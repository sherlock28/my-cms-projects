import { API_URL } from "./settings";

export function signOutService({ jwt }) {
  let isLogOutOk = false;

  return fetch(`${API_URL}/users/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  })
    .then(response => response.json())
    .then(res => {
      res.status === "Ok" ? (isLogOutOk = true) : (isLogOutOk = false);
      return { message: res.message, isLogOutOk };
    });
}
