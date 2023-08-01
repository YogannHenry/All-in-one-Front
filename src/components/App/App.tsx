import { Outlet } from 'react-router-dom';

import ThemeProvider from '../../contexts/ThemeProvider';

import NavBar from '../Partials/NavBar/NavBar';

function App() {
  return (
    //on appel le ThemeProvider qui va nous permettre de changer le thème. Outlet est un composant de react-router-dom qui permet d'afficher les composants enfants du composant parent. Ici, Outlet va afficher les composants enfants du composant App.
    <ThemeProvider>
      <div className="font-rubik">
        <NavBar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
