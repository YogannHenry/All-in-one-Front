import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';

import { Task } from '../../../../@types';
import { getAPI } from '../../../../utils/config';

interface List {
  id: number;
  name: string;
}

function TodoList() {
  const userId = useAppSelector((state) => Number(state.user.userId));
  const isUserLogged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  const [lists, setLists] = useState<List[]>([]);
  const [newList, setNewList] = useState('');
  const [selectedListTasks, setSelectedListTasks] = useState<Task[]>([]);
  const [updateListId, setUpdateListId] = useState<number | null>(null);

  const [updateListName, setUpdateListName] = useState('');

  const getLists = async () => {
    const { data } = await getAPI().get(`/list`);
    setLists(data);
    console.log(data, 'debut');
  };

  // Récupérer les tâches d'une liste pour gérer la prévisualisation, on récupere que les tasks qui ont le status false.
  const getTasksForList = async (listId: number) => {
    const { data } = await getAPI().get(`/list/${listId}/task`);
    const filteredTasks = data.filter((task: Task) => task.status === false);

    // Vérifiez si selectedListTasks est déjà non vide
    if (selectedListTasks.length > 0) {
      setSelectedListTasks([]); // Réinitialisez-le à un tableau vide
    }

    setSelectedListTasks(filteredTasks);
  };

  const addList = async (newList: string) => {
    const { data } = await getAPI().post(`/list`, {
      name: newList,
      userId: userId,
    });
    setLists(data);
    getLists();
  };

  const handleUpdateList = async () => {
    if (!updateListName || !updateListId) {
      return;
    }

    const { data } = await getAPI().put(`/list/${updateListId}`, {
      name: updateListName,
    });

    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === updateListId ? { ...list, name: updateListName } : list
      )
    );

    // Réinitialise les champs
    setUpdateListName('');
    setUpdateListId(null);
    console.log(data, 'update');
  };

  const deleteList = async (id: number) => {
    const { data } = await getAPI().delete(`/list/${id}`);
    getLists();
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewList(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addList(newList);
    setNewList(''); // Réinitialise le champ de saisie
  }

  useEffect(() => {
      if (!isUserLogged) {
      navigate('/'); 
    } else {
   
      getLists();
    }
  }, [isUserLogged, navigate]);

  return (
    <>
    {isUserLogged && (
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
                <div className="md:w-1/2 collapse z-40">
                  <input
                    onClick={() => getTasksForList(list.id)}
                    type="radio"
                    name="my-accordion-1"
                  />

                  <div
                    className={`collapse-title text-xl font-medium ${
                      updateListId === list.id ? 'z-10' : '-z-10'
                    }`}
                  >
                    {updateListId === list.id ? (
                      // Champ d'entrée texte en mode édition
                      <input
                      className='input input-bordered border-[var(--color-primary-300)] w-full mr-2'
                        type="text"
                        value={updateListName}
                        onChange={(e) => setUpdateListName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleUpdateList();
                          }
                        }}
                      />
                    ) : (
                      // Nom de la liste en mode affichage
                      <span>{list.name}</span>
                    )}
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
                  
                  className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white ml-2"
                    type="button"
                    onClick={() => {
                      if (updateListId === list.id) {
                        // Si la liste est déjà en mode édition, enregistrez les modifications
                        handleUpdateList();
                      } else {
                        // Sinon, activez le mode édition en définissant updateListId
                        setUpdateListId(list.id);
                        setUpdateListName(list.name); // Pré-remplissez le champ avec le nom actuel de la liste
                      }
                    }}
                  >
                    {updateListId === list.id ? (
                      'Enregistrer'
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    )}
                  </button>

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
    )}
    </>
  );
}
export default TodoList;
