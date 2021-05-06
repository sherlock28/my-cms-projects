import { useContext } from "react";
import ProjectContext from "context/ProjectContext";

export function useUser() {
  const { projects, setProjects } = useContext(ProjectContext);

  return { projects, setProjects };
}
