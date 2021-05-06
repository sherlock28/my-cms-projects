import React, { useState } from "react";

const Context = React.createContext({});

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);

  return (
    <Context.Provider value={{ projects, setProjects }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
