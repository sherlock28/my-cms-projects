import { API_URL } from "./settings";

export function getProjectByIdService({ idProject, jwt }) {
  return fetch(`${API_URL}/projects/${idProject}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  })
    .then(response => response.json())
    .then(res => res)
    .catch(err => console.error(err));
}
