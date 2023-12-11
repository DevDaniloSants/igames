import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const handleChange = () => {
    setTheme(!theme);
    console.log(theme);
  };

  const value = {
    theme,
    handleChange,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
