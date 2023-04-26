import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const value = [items, setItems];

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
