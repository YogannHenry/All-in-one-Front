import { useState } from 'react';
import { Task } from '../../../../../@types';
import { getAPI } from '../../../../../utils/config';

interface TasksItemProps {
  task: Task;
  updateTask: (id: number, updatedTaskData: any) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  updateTaskName: (id: number, updatedTaskData: any) => Promise<void>;
}

function TasksItem({ task, updateTask, deleteTask, updateTaskName  }: TasksItemProps) {
  const { id, name, status } = task;
  const [updateTaskId, setUpdateTaskId] = useState<number | null>(null);
  const [editedTaskName, setEditedTaskName] = useState<string>(name);

  function handleChange() {
    const updatedTaskData = {status: !status,
    };
    updateTask(id, updatedTaskData);
  }

  function handleUpdateName(e: React.ChangeEvent<HTMLInputElement>) {
    setEditedTaskName(e.target.value);
  }

  const handleUpdateTask = async () => {
    if (!updateTaskName || !updateTaskId) {
      return;
    }

    const updatedTaskData = { name: editedTaskName };
    updateTaskName(id, updatedTaskData);
    setUpdateTaskId(null); 
  };

  function handleClick() {
    deleteTask(id);
  }


  
  return (
    <div className="card  bg-base-100 shadow-xl">
            <div className={status ? 'flex justify-between items-center h-14 px-4 border-b-2 first-line:rounded  flex-grow line-through opacity-50' : 'flex justify-between items-center h-14 px-4 border-b-2 '}>
            
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    checked={status}
                    className="checkbox border-[var(--color-primary-300)]"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full pl-5">
              {updateTaskId === task.id ? (
                      // Champ d'entrée texte en mode édition
                      <input
                      className='input input-bordered border-[var(--color-primary-300)] w-full mr-2'
                        type="text"
                        value={editedTaskName}
                        onChange={handleUpdateName}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleUpdateTask();
                          }
                        }}
                      />
                    ) : (
                      // Nom de la liste en mode affichage
                      <p>{name}</p>
                    )}
              </div>
              <button
                    className={`btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white ml-2 ${status === true ? 'hidden' : ''}`}
                    type="button"
                    onClick={() => {
                      if (updateTaskId === task.id) {
                        // Si la liste est déjà en mode édition, enregistrez les modifications
                        handleUpdateTask();
                      } else {
                        // Sinon, activez le mode édition en définissant updateTaskId
                        setUpdateTaskId(task.id);
                        setEditedTaskName(task.name); // Pré-remplissez le champ avec le nom actuel de la liste
                      }
                    }}
                  >
                    {updateTaskId === task.id ? (
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
              <div className="card-actions justify-around ">
                <button type="button"   onClick={handleClick}>
                <svg
              
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-[var(--color-primary-300)] hover:stroke-[var(--color-primary-500)]  ml-5"
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
        
        </div>
  );
}

export default TasksItem;