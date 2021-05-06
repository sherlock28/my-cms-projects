import { useState, useContext } from "react";
import { deleteProjectService, getProjectsService } from "services";
import { useUser } from "./useUser";
import ProjectContext from "context/ProjectContext";

export function useDeleteProject() {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { jwt } = useUser();
  const { setProjects } = useContext(ProjectContext);

  const deleteProject = ({ idProject }) => {
    setIsSubmiting(true);
    deleteProjectService({ idProject })
      .then(res => {
        setIsSubmiting(false);
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

  return { isSubmiting, deleteProject };
}
