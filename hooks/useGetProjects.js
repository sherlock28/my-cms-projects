import { useState, useEffect } from "react";
import { getProjectsService } from "services";

export function useGetProjects({ jwt }) {
  const [projects, setProjects] = useState([]);
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
