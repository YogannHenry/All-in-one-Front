import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {

  //on défini notre state et notre fonction pour changer le state. Le useState permet de définir un thème par défaut
  const [colorTheme, setColorTheme] = useState('theme-red'); 

  //on crée une fonction qui va permettre de changer le thème
  const ChangeColorTheme = (newTheme) => {
    setColorTheme(newTheme);
  };

  return (

    //on passe en value de notre contexte le state et la fonction qui permet de changer le state
    <ThemeContext.Provider value={{ colorTheme, ChangeColorTheme }}>

      {/* on retourne les enfants de notre contexte */}
      <div className={colorTheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
