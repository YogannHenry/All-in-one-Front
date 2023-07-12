function ToolMenu() {
  return (
    <ul className="flex flex-col items-center font-bold uppercase ">
      <li>
        <a className="font-bold underline  text-base hover:bg-red-200">Outils</a>
      </li>
      <li>
        <a className="hover:bg-red-200">Todo-List</a>
      </li>
      <li>
        <a className="hover:bg-red-200">Wallet</a>
      </li>
      <li>
        <a className="hover:bg-red-200">Car-Tool</a>
      </li>
    </ul>
  );
}

export default ToolMenu;
