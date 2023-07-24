import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';
import Form from './Form/Form';

const API_URL = 'http://localhost:3002/api';

function TodoList() {
  const [lists, setLists] = useState([]);

  const userId = useAppSelector((state) => ` ${state.user.id}`);

  const getLists = async () => {
    const { data } = await axios.get(`${API_URL}/list`);
    setLists(data);
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

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-base-200">
      <div className="max-w-full w-11/12 md:w-3/4 lg:w-1/2 px-4 flex flex-col items-center">
        <h1 className="text-4xl mb-10">TodoList</h1>
        <Form addList={addList} />

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            {lists.map((list) => (
              <div
                className="flex flex-col md:flex-row bg-base-200 mb-4"
                key={list.id}
              >
                <div className="md:w-1/2 collapse">
                  <input type="radio" name="my-accordion-1" />
                  <div className="collapse-title text-xl font-medium">
                    {list.name}
                  </div>
                  <div className="collapse-content">
                    <p>- {list.name}</p>
                  </div>
                </div>
                <div className="flex p-2 items-center md:w-1/2">
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
