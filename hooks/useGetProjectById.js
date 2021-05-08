import { getProjectByIdService } from "services";
import { useAppContext } from "hooks";

export function useGetProjectById() {
  const {
    setTitle,
    setDescription,
    setRepositoryURL,
    setPageURL,
  } = useAppContext();

  const setFieldsForm = (idProject, jwt) => {
    getProjectByIdService({ idProject, jwt })
      .then(res => {
        setTitle(res.data.project.title);
        setDescription(res.data.project.description);
        setRepositoryURL(res.data.project.repositoryURL);
        setPageURL(res.data.project.pageURL);
      })
      .catch(err => {
        console.error(err);
        setTitle("");
        setDescription("");
        setRepositoryURL("");
        setPageURL("");
      });
  };

  return {
    setFieldsForm,
  };
}
