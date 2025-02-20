import { createContext, useContext, useState } from "react";
const ItemContext = createContext(); // Create the context

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext; // Export context so it can be used with useContext()
