import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('theme-red'); 

  const ChangeColorTheme = (newTheme) => {
    setColorTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, ChangeColorTheme }}>
      <div className={colorTheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
