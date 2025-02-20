import { createContext, useContext, useState } from "react";
import MenuData from "../assets/menuData";
const RestaurantContext = createContext(); // Create the context

export const RestaurantProvider = ({ children }) => {
  const [currResturant, setCurrResturant] = useState(0);
  return (
    <RestaurantContext.Provider value={[currResturant, setCurrResturant]}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext; // Export context so it can be used with useContext()