import { createContext, useState } from "react";

export const AppContext = createContext(); 

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <AppContext.Provider value={{ movies, setMovies }}>
      {children}
    </AppContext.Provider>
  );
};