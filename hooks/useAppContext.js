import { useContext } from "react";
import AppContext from "context/AppContext";

export function useAppContext() {
  const {
    projectSelected,
    setProjectSelected,
    isFormEdit,
    setIsFormEdit,
  } = useContext(AppContext);

  return {
    projectSelected,
    setProjectSelected,
    isFormEdit,
    setIsFormEdit,
  };
}
