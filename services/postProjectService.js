import { API_URL } from "./settings";

export function postProjectService({ formData, jwt }) {
  // const data = { title, description, repositoryURL, pageURL, image };

  return fetch(`${API_URL}/projects`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: jwt,
    },
  });
}
