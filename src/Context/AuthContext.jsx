"use client";
import React, { createContext } from "react";

export const cultureContext = createContext();
function AuthContext({ children }) {
  return (
    <cultureContext.Provider value={[]}>{children}</cultureContext.Provider>
  );
}

export default AuthContext;
