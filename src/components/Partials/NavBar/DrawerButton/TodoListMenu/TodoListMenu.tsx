import { NavLink } from "react-router-dom";

function TodoListMenu() {
  return (
    <ul className="flex flex-col items-center">
      <li>
        <a className="font-bold underline uppercase text-base">Todo-List</a>
      </li>
      <li>
        <NavLink to="/list/4">
        <a>List 1</a>
        </NavLink>
      </li>
      <li>
        <a>List 2</a>
      </li>
      <li>
        <a>List 3</a>
      </li>
    </ul>
  );
}

export default TodoListMenu;
