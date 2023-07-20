import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';
import { fetchRecipes } from '../../store/reducers/recipes';
import ThemeProvider from '../../contexts/ThemeProvider';

import NavBar from '../Partials/NavBar/NavBar';

function App() {
  return (
    //on appel le ThemeProvider qui va nous permettre de changer le thème
    <ThemeProvider>
      <div className="font-rubik">
        <NavBar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
