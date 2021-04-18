import React, { useState, useEffect } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  
  const [jwt, setJwt] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setJwt(window.sessionStorage.getItem("jwt"));
    setUserId(window.sessionStorage.getItem("userId"));
    setEmail(window.sessionStorage.getItem("email"));
    setUsername(window.sessionStorage.getItem("username"));
  }, []);

  return (
    <Context.Provider
      value={{
        jwt,
        setJwt,
        userId,
        setUserId,
        email,
        setEmail,
        username,
        setUsername,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
