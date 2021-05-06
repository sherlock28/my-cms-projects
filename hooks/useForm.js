import { useState } from "react";
import { postProjectService, getProjectsService } from "services";

export function useForm() {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [repositoryURL, setRepositoryURL] = useState("");
  const [pageURL, setPageURL] = useState("");
  const [image, setImage] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
    if (name === "repositoryURL") setRepositoryURL(value);
    if (name === "pageURL") setPageURL(value);
    if (name === "image") setImage(e.target.files[0]);
  };

  const handleSubmit = (e, { jwt }) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("repositoryURL", repositoryURL);
    fd.append("pageURL", pageURL);
    fd.append("image", image);
    setIsSubmiting(true);
    postProjectService({
      formData: fd,
      jwt,
    })
      .then(res => {
        setIsSubmiting(false);
        clearFields();
      })
      .catch(err => {
        setIsSubmiting(false);
        console.error(err);
      });
  };

  function clearFields() {
    setTitle("");
    setDescription("");
    setRepositoryURL("");
    setPageURL("");
    setImage("");
  }

  return {
    title,
    description,
    repositoryURL,
    pageURL,
    image,
    handleChange,
    handleSubmit,
    isSubmiting,
  };
}
