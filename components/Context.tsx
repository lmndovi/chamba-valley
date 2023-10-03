"use client";

// Context.js
import React, { createContext, useContext, useState } from "react";

// Create a context for the isOpen state
export const IsOpenContext = createContext();

// Custom hook to access the context
export const useIsOpen = () => useContext(IsOpenContext);

// Provide the context at the top level of your app
export function IsOpenProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
}
