import { NavLink } from "react-router-dom";

interface List {
  id: number;
  name: string;
 
}

interface TodoListMenuProps {
  lists: List[];
}

function TodoListMenu({ lists }: TodoListMenuProps) {

return (
    <ul className="flex flex-col items-center">
      <li>
        <a className="font-bold underline uppercase text-base">Todo-List</a>
      </li>
      {lists.map((list) => (
        <li key={list.id}>
          <NavLink to={`/list/${list.id}`}>
            <a>{list.name}</a>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default TodoListMenu;
