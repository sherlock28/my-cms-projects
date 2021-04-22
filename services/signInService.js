import { API_URL } from "./settings";

export function signInService({ email, password }) {
  let isLoggedOk = false;
  let jwt = "";

  return fetch(`${API_URL}/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      jwt = response.headers.get("Authorization");
      return response.json();
    })
    .then(res => {
      res.status === "Ok" ? (isLoggedOk = true) : (isLoggedOk = false);
      return { message: res.message, isLoggedOk, jwt };
    })
    .catch(err => console.error(err));
}
