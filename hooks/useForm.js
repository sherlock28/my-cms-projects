import { useState, useContext } from "react";
import {
  postProjectService,
  updateProjectService,
  getProjectsService,
} from "services";
import ProjectContext from "context/ProjectContext";
import { useAppContext } from "hooks";

export function useForm() {
  const {
    isFormEdit,
    title,
    description,
    repositoryURL,
    pageURL,
    image,
    setTitle,
    setDescription,
    setRepositoryURL,
    setPageURL,
    setImage,
  } = useAppContext();
  const { setProjects } = useContext(ProjectContext);

  const [isSubmiting, setIsSubmiting] = useState(false);

  if (!isFormEdit) clearFields();

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
    if (isFormEdit) return updateProject(e, { jwt });
    saveProject(e, { jwt });
  };

  const saveProject = (e, { jwt }) => {
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

  const updateProject = (e, { jwt }) => {
    // e.preventDefault();
    // const fd = createFormData();
    // setIsSubmiting(true);
    console.log("edit");
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
    console.log(title);
    console.log(description);
    console.log(repositoryURL);
    console.log(pageURL);
    console.log(image);

    fd.append("title", title);
    fd.append("description", description);
    fd.append("repositoryURL", repositoryURL);
    fd.append("pageURL", pageURL);
    fd.append("image", image);
    return fd;
  }

  return {
    handleChange,
    handleSubmit,
    isSubmiting,
  };
}
