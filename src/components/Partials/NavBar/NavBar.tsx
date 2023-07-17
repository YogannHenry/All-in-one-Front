import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton/DrawerButton';
import Logo from '../../../assets/TodoNavBar.png';

interface ThemeProps {
  colorTheme: String;
  handleColorChange: String;
}

function NavBar() {
  const { colorTheme, handleColorChange } = useContext(ThemeContext);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <DrawerButton />
        <NavLink to="/" className="w-11">
          <img src={Logo} alt="Logo" className="object-scale-down" />
        </NavLink>
      </div>
      <div className="navbar-center max-md:hidden">
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-ghost m-1 mr-16 hover:bg-red-300"
          >
            Outils
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a className=" hover:bg-red-300">Todo-List</a>
            </li>
            <li>
              <a className=" hover:bg-red-300">Wallet</a>
            </li>
            <li>
              <a className=" hover:bg-red-300">Car-Tool</a>
            </li>
          </ul>
        </div>
        <NavLink to="/Contact" className="btn btn-ghost  hover:bg-red-300">
          contact
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="color-switch">
          <button
            className="btn bg-red-300"
            onClick={() => handleColorChange('red')}
          >
            1
          </button>
          <button
            className="btn bg-sky-300"
            onClick={() => handleColorChange('sky')}
          >
            2
          </button>
          <button
            className="btn bg-brique-300"
            onClick={() => handleColorChange('brique')}
          >
            3
          </button>
        </div>
        <NavLink
          to="/login"
          className={`btn btn-ghost text-${colorTheme}-300 hover:border-b-red-400 hover:bg-white`}
        >
          Se connecter
        </NavLink>
        <NavLink
          to="/signin"
          className={`btn text-white bg-${colorTheme}-300 hover:bg-${colorTheme}-500`}
        >
          s'inscrire
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
