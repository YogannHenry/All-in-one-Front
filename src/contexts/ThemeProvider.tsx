import React, { ReactNode, useState } from 'react';

//on crée un contexte qui va contenir le state et la fonction qui permet de changer le state. <{ colorTheme: string; ChangeColorTheme: (newTheme: React.SetStateAction<string>) => void }> est une notation qui spécifie le type de données qui sera stocké dans le contexte. Cela signifie que le contexte contiendra un objet avec deux propriétés : colorTheme et ChangeColorTheme.
export const ThemeContext = React.createContext<{ colorTheme: string; ChangeColorTheme: (newTheme: React.SetStateAction<string>) => void }>({
  colorTheme: 'theme-red',
  ChangeColorTheme: () => {},
});

//void signifie que la fonction ne renvoie rien (elle n'a pas de valeur de retour). La fonction se contente de changer l'état interne du composant,

const ThemeProvider = ({ children }: { children: ReactNode }) => {

  //on défini notre state et notre fonction pour changer le state. Le useState permet de définir un thème par défaut
  const [colorTheme, setColorTheme] = useState('theme-red'); 

  //on crée une fonction qui va permettre de changer le thème
  const ChangeColorTheme = (newTheme: React.SetStateAction<string>) => {
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
