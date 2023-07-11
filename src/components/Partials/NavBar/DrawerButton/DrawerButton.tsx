import ToolMenu from './ToolMenu/ToolMenu';

function DrawerButton() {
  return (
    <div className="dropdown">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content max-md:z-0">
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
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 max-md:w-full h-full bg-base-200 text-base-content flex items-center ">
          <ToolMenu />
        </div>
      </div>
    </div>
  );
}

export default DrawerButton;
