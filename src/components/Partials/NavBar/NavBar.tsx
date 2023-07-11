function NavBar() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start z-10">
        <div className="dropdown">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              tabIndex={0}
              className="btn btn-ghost btn-circle drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
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
        <a className="btn text-white bg-red-300 hover:bg-red-400">s'inscrire</a>
      </div>
    </div>
  );
}

export default NavBar;
