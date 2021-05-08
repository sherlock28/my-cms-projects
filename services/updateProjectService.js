import { API_URL } from "./settings";

export function updateProjectService({ idProject, formData, jwt }) {
  return fetch(`${API_URL}/projects/${idProject}`, {
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
