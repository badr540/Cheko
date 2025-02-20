import { createContext, useState } from "react";

const DarkModeContext = createContext(); 

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={[isDarkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext; 
