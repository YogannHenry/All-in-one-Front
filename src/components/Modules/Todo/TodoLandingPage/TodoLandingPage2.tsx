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
    description: 'et les ananas ?',
  },
];

function TodoListPage() {
  return (
    <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen bg-base-200">
      <p className="text-4xl mb-10">Nom de la liste</p>
      <div className="card max-md:w-full w-1/2 bg-base-100 shadow-xl mb-10">
        <input
          type="text"
          placeholder="Ajouter une tâche"
          className="input input-bordered input-error w-full"
        />
      </div>

      <div className="card max-md:w-full w-1/2 bg-base-100 shadow-xl">
        {tasks.map((task) => (
          <div
            key={task.id}
            id={task.id}
            className="flex justify-between items-center h-14 px-4 border-b-2"
          >
            <div className="w-full pl-5">
              <p>{task.description}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between px-5 h-14 text-xs text-slate-500">
          <span>{tasks.length} tâches en cours</span>
          <div className="flex justify-around">
            <span className="px-2">Tâches</span>
            <span className="px-2">Actives</span>
            <span className="px-2">Terminées</span>
          </div>
          <span className="clear">Nettoyer</span>
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
