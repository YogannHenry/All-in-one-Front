import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';

import { Task } from '../../../../@types';
import API_URL from '../../../API_URL';

interface List {
  id: number;
  name: string;
}

function TodoList() {
  const [lists, setLists] = useState<List[]>([]);
  const [newList, setNewList] = useState('');

  const userId = useAppSelector((state) => Number(state.user.userId));

  const [selectedListTasks, setSelectedListTasks] = useState<Task[]>([]);

  const getLists = async () => {
    const { data } = await axios.get(`${API_URL}/list`);
    setLists(data);
  };

  // Récupérer les tâches d'une liste pour gérer la prévisualisation
  const getTasksForList = async (listId: number) => {
    const { data } = await axios.get(`${API_URL}/list/${listId}/task`);
    const filteredTasks = data.filter((task) => task.status === false);
    setSelectedListTasks(filteredTasks);
  };

  const addList = async (newList: string) => {
    const { data } = await axios.post(`${API_URL}/list`, {
      name: newList,
      userId: userId,
    });
    setLists(data);
    getLists();
  };

  const deleteList = async (id: number) => {
    const { data } = await axios.delete(`${API_URL}/list/${id}`);
    getLists();
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewList(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addList(newList);
    setNewList('');
  }

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-base-200">
      <div className="max-w-full w-11/12 md:w-3/4 lg:w-1/2 px-4 flex flex-col items-center">
        <h1 className="text-4xl mb-10">TodoList</h1>
        <form
          onSubmit={handleSubmit}
          className="card w-full bg-base-100 shadow-xl mb-10"
        >
          <div className="flex justify-between">
            <div className="flex-grow">
              <input
                value={newList}
                onChange={handleChange}
                type="text"
                placeholder="Ajouter une Liste"
                className="input input-bordered border-[var(--color-primary-300)] w-full mr-2"
              />
            </div>
            <button className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </form>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            {lists.map((list) => (
              <div
                className="flex flex-col md:flex-row bg-base-200 mb-4"
                key={list.id}
              >
                <div className="md:w-1/2 collapse">
                  <input
                    onClick={() => getTasksForList(list.id)}
                    type="radio"
                    name="my-accordion-1"
                  />
                  <div className="collapse-title text-xl font-medium">
                    {list.name}
                  </div>
                  <div className="collapse-content">
                    <ul>
                      {selectedListTasks.map((task) => (
                        <li className="pl-5 pb-1" key={task.id}>
                          {task.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex p-2 gap-4 items-center md:w-1/2">
                  <div className="flex-grow" />
                  <NavLink
                    to={`/list/${list.id}`}
                    className="text-blue-500 underline ml-2"
                  >
                    Ouvrir
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => deleteList(list.id)}
                    className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
