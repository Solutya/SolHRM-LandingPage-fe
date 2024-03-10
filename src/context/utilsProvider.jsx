"use client";
import React, { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const values = {
    isOpen,
    setIsOpen,
  };
  return (
    <UtilsContext.Provider value={values}>{children}</UtilsContext.Provider>
  );
};

export const useUtilsProvider = () => {
  return useContext(UtilsContext);
};
