import React from 'react';

import { Outlet } from 'react-router-dom';

import Home from '../Home/Home';
import NavBar from '../Partials/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
