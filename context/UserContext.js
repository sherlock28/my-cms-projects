import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");

  return (
    <Context.Provider
      value={{ jwt, setJwt, userId, setUserId, username, setUsername }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
