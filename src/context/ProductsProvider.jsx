import React, { createContext, useContext } from "react";
import useLocalStorage from "../features/Category/useLocalStorage";

const productsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useLocalStorage("products", []);

  return (
    <productsContext.Provider value={[products, setProducts]}>
      {children}
    </productsContext.Provider>
  );
}

export default function useProducts() {
  const context = useContext(productsContext);
  return context;
}
