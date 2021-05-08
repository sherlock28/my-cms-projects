import React, { useState } from "react";

const Context = React.createContext({});

export function AppContextProvider({ children }) {
  const [projectSelected, setProjectSelected] = useState(undefined);
  const [isFormEdit, setIsFormEdit] = useState(false);

  return (
    <Context.Provider
      value={{
        projectSelected,
        setProjectSelected,
        isFormEdit,
        setIsFormEdit,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
