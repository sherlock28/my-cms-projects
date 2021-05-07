import { API_URL } from "./settings";

export function updateProjectService({ formData, jwt }) {
  return fetch(`${API_URL}/projects`, {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: jwt,
    },
  })
    .then(response => response.json())
    .then(res => res)
    .catch(err => console.error(err));
}
