import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton/DrawerButton';
import Logo from '../../../assets/TodoNavBar.png';
import ThemeButton from './ThemeButton/ThemeButton';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { logout } from '../../../store/reducers/user';

interface ThemeProps {
  colorTheme: String;
  handleColorChange: String;
}

interface List {
  id: number;
  name: string;
}

function NavBar() {
  const isLogged = useAppSelector((state) => state.user.logged);

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div>
      {isLogged && (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <DrawerButton />
            <NavLink to="/" className="w-11 ml-5">
              <img src={Logo} alt="Logo" className="object-scale-down" />
            </NavLink>
          </div>
          <div className="navbar-center max-md:hidden">
            <h1 className="text-[var(--color-primary-500)] text-3xl">
              All-In-One
            </h1>
          </div>
          <div className="navbar-end">
            <ThemeButton />

            <button
              onClick={handleLogout}
              className={`btn text-white bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)]`}
            >
              se déconnecter
            </button>
          </div>
        </div>
      )}

      {!isLogged && (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <NavLink to="/" className="w-11 ml-5">
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
                  <a className=" hover:bg-[var(--color-primary-300)]">
                    Todo-List
                  </a>
                </li>
                <li>
                  <a className=" hover:bg-[var(--color-primary-300)]">Wallet</a>
                </li>
                <li>
                  <a className=" hover:bg-[var(--color-primary-300)]">
                    Car-Tool
                  </a>
                </li>
              </ul>
            </div>
            <NavLink
              to="/Contact"
              className="btn btn-ghost  hover:bg-[var(--color-primary-300)]"
            >
              contact
            </NavLink>
          </div>
          <div className="navbar-end flex max-md:flex-col">
            <ThemeButton />
            <NavLink
              to="/login"
              className={`btn btn-ghost text-[var(--color-primary-300)]  hover:underline-offset-4 hover:bg-white`}
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
      )}
    </div>
  );
}

export default NavBar;
