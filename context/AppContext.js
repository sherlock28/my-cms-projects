import React, { useState } from "react";

const Context = React.createContext({});

export function AppContextProvider({ children }) {
  const [projectSelected, setProjectSelected] = useState(undefined);

  return (
    <Context.Provider value={{ projectSelected, setProjectSelected }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
