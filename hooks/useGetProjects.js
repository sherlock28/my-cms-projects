import { useState, useEffect, useContext } from "react";
import { getProjectsService } from "services";
import ProjectContext from "context/ProjectContext";

export function useGetProjects({ jwt }) {
  const { projects, setProjects } = useContext(ProjectContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(jwt => {
    setIsLoading(true);
    getProjectsService({ jwt })
      .then(res => {
        setIsLoading(false);
        setProjects(res.data.projects);
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err);
      });
  }, []);

  return {
    isLoading,
    projects,
    setProjects,
  };
}
