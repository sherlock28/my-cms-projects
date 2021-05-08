import { useContext } from "react";
import AppContext from "context/AppContext";

export function useAppContext() {
  const {
    projectSelected,
    setProjectSelected,
    isFormEdit,
    setIsFormEdit,
    title,
    setTitle,
    description,
    setDescription,
    repositoryURL,
    setRepositoryURL,
    pageURL,
    setPageURL,
    image,
    setImage,
  } = useContext(AppContext);

  return {
    projectSelected,
    setProjectSelected,
    isFormEdit,
    setIsFormEdit,
    title,
    setTitle,
    description,
    setDescription,
    repositoryURL,
    setRepositoryURL,
    pageURL,
    setPageURL,
    image,
    setImage,
  };
}
