
import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton/DrawerButton';
import Logo from '../../../assets/TodoNavBar.png';
import ThemeButton from './ThemeButton/ThemeButton';

interface ThemeProps {
  colorTheme: String;
  handleColorChange: String;
}

function NavBar() {

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
            className="btn btn-ghost m-1 mr-16 hover:bg-[var(--color-primary-300)]"
          >
            Outils
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a className=" hover:bg-[var(--color-primary-300)]">Todo-List</a>
            </li>
            <li>
              <a className=" hover:bg-[var(--color-primary-300)]">Wallet</a>
            </li>
            <li>
              <a className=" hover:bg-[var(--color-primary-300)]">Car-Tool</a>
            </li>
          </ul>
        </div>
        <NavLink to="/Contact" className="btn btn-ghost  hover:bg-[var(--color-primary-300)]">
          contact
        </NavLink>
      </div>
      <div className="navbar-end">
        <ThemeButton />
        <NavLink
          to="/login"
          className={`btn btn-ghost text-[var(--color-primary-300)] hover:border-b-[var(--color-primary-500)] hover:bg-white`}
        >
          Se connecter
        </NavLink>
        <NavLink
          to="/signin"
          className={`btn text-white bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)]`}
        >
          s'inscrire
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
