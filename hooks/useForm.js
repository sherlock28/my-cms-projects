import { useState, useContext } from "react";
import {
  postProjectService,
  updateProjectService,
  getProjectsService,
} from "services";
import ProjectContext from "context/ProjectContext";

export function useForm() {
  const { setProjects } = useContext(ProjectContext);

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

  const handleSubmitSave = (e, { jwt }) => {
    e.preventDefault();

    const fd = createFormData();
    setIsSubmiting(true);

    postProjectService({
      formData: fd,
      jwt,
    })
      .then(res => {
        setIsSubmiting(false);
        clearFields();

        /* ------------------------------ */
        /* update the project list 
        when a new one is added */
        getProjectsService({ jwt })
          .then(res => {
            setProjects(res.data.projects);
          })
          .catch(err => {
            console.error(err);
          });
        /* ------------------------------ */
      })
      .catch(err => {
        setIsSubmiting(false);
        console.error(err);
      });
  };

  const handleSubmitUpdate = (e, { jwt }) => {
    e.preventDefault();

    const fd = createFormData();
    setIsSubmiting(true);
  };

  function clearFields() {
    setTitle("");
    setDescription("");
    setRepositoryURL("");
    setPageURL("");
    setImage("");
  }

  function createFormData() {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("repositoryURL", repositoryURL);
    fd.append("pageURL", pageURL);
    fd.append("image", image);
    return fd;
  }

  return {
    title,
    description,
    repositoryURL,
    pageURL,
    image,
    handleChange,
    handleSubmitSave,
    handleSubmitUpdate,
    isSubmiting,
  };
}
