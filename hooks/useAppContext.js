import { useContext } from "react";
import AppContext from "context/AppContext";

export function useAppContext() {
  const { projectSelected, setProjectSelected } = useContext(AppContext);
  
  return {
    projectSelected,
    setProjectSelected,
  };
}
