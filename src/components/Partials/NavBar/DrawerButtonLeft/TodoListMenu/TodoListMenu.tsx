import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import API_URL from "../../../../API_URL";

interface List {
  id: number;
  name: string;
 
}


function TodoListMenu() {
  const [lists, setLists] = useState<List[]>([]);

  const getLists = async () => {
    const { data } = await axios.get(`${API_URL}/list`);
        setLists(data);      
   
  };
  

  useEffect(() => {
    getLists();
  }, []);

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
