import { ThemeContext } from '../../../../contexts/ThemeProvider';
import React, { useContext, useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
// on importe notre ThemeContext qui va nous permettre de changer le thème et la fonction useContext qui va nous permettre d'utiliser notre contexte
function ThemeButton() {
  const isLogged = useAppSelector((state) => state.user.logged);
  //on récupère notre contexte et on recupère dedans la fonction qui permet de changer le thème
  const { ChangeColorTheme } = useContext(ThemeContext);

  // Utilisation de useState pour gérer l'état du thème actuel
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Récupération du thème précédemment choisi dans le localStorage, ou un thème par défaut s'il n'existe pas
    return localStorage.getItem('selectedTheme') || 'theme-red';
  });

  // Utilisation de useEffect pour mettre à jour le thème dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('selectedTheme', currentTheme);
    ChangeColorTheme(currentTheme);
  }, [currentTheme, ChangeColorTheme]);

  return (
    <div>
      {isLogged && (
    <div className="">
      
<ul>
        <li>
          <button
            className="h-8 w-8 my-1 bg-red-300 rounded-full"
            //au clic on appelle la fonction qui permet de changer le thème et on lui passe en paramètre le nom du thème
            onClick={() => setCurrentTheme('theme-red')}
          ></button>
        </li>
        <li>
          <button
            className="h-8 w-8 my-1 bg-sky-300 rounded-full"
            onClick={() => setCurrentTheme('theme-sky')}
          ></button>
        </li>
        <li>
          <button
            className="h-8 w-8 my-1 bg-brique-300 rounded-full"
            onClick={() => setCurrentTheme('theme-brique')}
          ></button>
        </li>
        <li>
          <button
            className="h-8 w-8 my-1 bg-blueIntense-300 rounded-full"
            onClick={() => setCurrentTheme('theme-blueIntense')}
          ></button>
        </li>
        <li>
          <button
            className="h-8 w-8 my-1 bg-orangeIntense-300 rounded-full"
            onClick={() => setCurrentTheme('theme-orangeIntense')}
          ></button>
        </li>
        <li>
          <button
            className="h-8 w-8 my-1 bg-emeraldIntense-300 rounded-full"
            onClick={() => setCurrentTheme('theme-emeraldIntense')}
          ></button>
        </li>
      </ul>
    </div>
      )}
        {!isLogged && (
          <div className="dropdown dropdown-end right-8">
      
          <label
            tabIndex={0}
            className={`btn bg-[var(--color-primary-300)] text-white rounded-bl-3xl rounded-tr-3xl hover:bg-[var(--color-primary-500)]  `}
          >
            Couleur
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  w-[240px] grid grid-cols-8 max-md:grid-cols-2 gap-8"
          >
            <li>
              <button
                className="btn bg-red-300 rounded-full"
                //au clic on appelle la fonction qui permet de changer le thème et on lui passe en paramètre le nom du thème
                onClick={() => setCurrentTheme('theme-red')}
              ></button>
            </li>
            <li>
              <button
                className="btn bg-sky-300 rounded-full"
                onClick={() => setCurrentTheme('theme-sky')}
              ></button>
            </li>
            <li>
              <button
                className="btn bg-brique-300 rounded-full"
                onClick={() => setCurrentTheme('theme-brique')}
              ></button>
            </li>
            <li>
              <button
                className="btn bg-blueIntense-300 rounded-full"
                onClick={() => setCurrentTheme('theme-blueIntense')}
              ></button>
            </li>
            <li>
              <button
                className="btn bg-orangeIntense-300 rounded-full"
                onClick={() => setCurrentTheme('theme-orangeIntense')}
              ></button>
            </li>
            <li>
              <button
                className="btn bg-emeraldIntense-300 rounded-full"
                onClick={() => setCurrentTheme('theme-emeraldIntense')}
              ></button>
            </li>
          </ul>
        </div>

        )}
    </div>
  );
}

export default ThemeButton;
