import React, { createContext, useContext } from "react";
import useLocalStorage from "../features/Category/useLocalStorage";

const categoryContext = createContext();

export function CategoryProvider({ children }) {
  const [categorys, setCategorys] = useLocalStorage("categorys", []);

  return (
    <categoryContext.Provider value={[categorys, setCategorys]}>
      {children}
    </categoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(categoryContext);
  return context;
}
