import { createContext, useContext, useState } from "react";
import MenuData from "../assets/menuData";
const ItemContext = createContext(); // Create the context

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(MenuData);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext; // Export context so it can be used with useContext()
