import { redirect } from 'react-router-dom';

const tasks = [
  {
    id: 's1',
    description: 'mange mes boules',
  },
  {
    id: '2',
    description: 'moi les fraises ça me refait le fion',
  },
  {
    id: '3',
    description: 'et les ananas ? ',
  },
];

function TodoListPage() {
  
  return (
    <div>
      <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen bg-base-200">
        <p className="text-4xl mb-10">Nom de la liste</p>
        <div className="card max-md:w-full  w-1/2 bg-base-100 shadow-xl mb-10">
          <input
            type="text"
            placeholder="Ajouter une tâche"
            className="input input-bordered border-[var(--color-primary-300)] w-full "
          />
          
        </div>

        <div className="card max-md:w-full w-1/2 bg-base-100 shadow-xl">
          {tasks.map((task) => (
            <div
              key={task.id}
              id={task.id}
              className="flex justify-between items-center h-14 px-4 border-b-2"
            >
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    // checked="checked"
                    className="checkbox border-[var(--color-primary-300)] "
                  />
                </label>
              </div>
              <div className="w-full pl-5">
                <p>{task.description}</p>
              </div>
              <div className="card-actions justify-around opacity-0 hover:opacity-100">
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between px-5 h-14 text-xs text-[var(--color-primary-300)]">
            <span>X taches en cours</span>
            <div className="flex justify-around ">
              <span className="px-2">Tàches</span>
              <span className="px-2">Actives</span>
              <span className="px-2">Terminées</span>
            </div>
            <span className="clear">Nettoyer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
