// SessionContext.js
import React, { createContext, useState } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);

  const saveSessionData = (data) => {
    setSessionData(data);
  };

  return (
    <SessionContext.Provider value={{ sessionData, saveSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
