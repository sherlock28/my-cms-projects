import React, { useState } from "react";

const UserContext = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider value={{ jwt, setJwt, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
