import React, { useState } from "react";

const Context = React.createContext({});

export function AppContextProvider({ children }) {
  const [projectSelected, setProjectSelected] = useState(undefined);
  const [isFormEdit, setIsFormEdit] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [repositoryURL, setRepositoryURL] = useState("");
  const [pageURL, setPageURL] = useState("");
  const [image, setImage] = useState("");

  return (
    <Context.Provider
      value={{
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
