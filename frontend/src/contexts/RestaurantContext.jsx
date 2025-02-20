import { createContext, useState } from "react";

const RestaurantContext = createContext(); 

export const RestaurantProvider = ({ children }) => {
  const [currResturantId, setCurrResturantId] = useState(0);

  return (
    <RestaurantContext.Provider value={[currResturantId, setCurrResturantId]}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext; // Export context so it can be used with useContext()