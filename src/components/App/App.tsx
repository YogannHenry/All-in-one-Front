

import { Outlet } from 'react-router-dom';
import ThemeProvider from '../../contexts/ThemeProvider';

import NavBar from '../Partials/NavBar/NavBar';

function App() {

  return (
    <ThemeProvider>
      <div className='font-rubik'>
        <NavBar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
