import { useState, useEffect, useContext } from "react";
import { getProjectsService } from "services";
import { useUser } from "hooks";
import ProjectContext from "context/ProjectContext";

export function useGetProjects() {
  const { projects, setProjects } = useContext(ProjectContext);
  const [isLoading, setIsLoading] = useState(false);
  const { jwt } = useUser();

  useEffect(() => {
    // setIsLoading(true);
    getProjectsService({ jwt })
      .then(res => {
        setProjects(res.data.projects);
        // setIsLoading(false);
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
