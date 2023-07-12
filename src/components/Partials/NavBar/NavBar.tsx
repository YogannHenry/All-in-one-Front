import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton/DrawerButton';

function NavBar() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <DrawerButton />
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
        <a className="btn btn-ghost  hover:bg-red-300">contact</a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost text-red-400 hover:border-b-red-400 hover:bg-white">
          Se connecter
        </a>
        <NavLink to="/signin" className="btn text-white bg-red-300 hover:bg-red-400">s'inscrire</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
 
