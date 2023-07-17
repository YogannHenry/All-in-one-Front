import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('red');

  const handleColorChange = (theme) => {
    setColorTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, handleColorChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
