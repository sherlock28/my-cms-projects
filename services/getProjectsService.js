import { API_URL } from "./settings";

export function getProjectsService({ jwt }) {
  if (jwt)
    return fetch(`${API_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    })
      .then(response => response.json())
      .then(res => res)
      .catch(err => console.error(err));

  return new Promise((resolve, reject) => {
    resolve({ data: { projects: [] } });
  });
}
