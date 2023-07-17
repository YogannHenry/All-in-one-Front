import { Task } from '../../../@types';

interface TasksItemProps {
  task: Task;
  updateTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

function TasksItem({ task, updateTask, deleteTask }: TasksItemProps) {
  const { id, label, done } = task;

  function handleChange() {
    // on veut utiliser le _endpoint_ PUT /tasks/:task_id
    // pour modifier une tâche
    // ça retourne la tâche mise à jour,
    // il faudra enregistrer cette tâche dans la liste de notre état
    // de plus, il faudra mettre à jour le compteur
    // → on fait ça dans <App />
    // → on diffuse la fonction via les props et on l'exécute
    updateTask(id);
  }

  function handleClick() {
    // on veut utiliser le _endpoint_ DELETE /tasks/:task_id
    // pour supprimer une tâche
    // ça retourne la liste des tâches mise à jour,
    // il faudra enregistrer cette liste dans notre état
    // → on fait ça dans <App />
    // → on diffuse la fonction via les props et on l'exécute
    deleteTask(id);
  }

  return (
    <li className="tasks-item">
      <label className={done ? 'tasks-label tasks-label--done' : 'tasks-label'}>
        <input
          className="tasks-check"
          type="checkbox"
          checked={done}
          onChange={handleChange}
        />
        {label}
      </label>
      <button type="button" className="tasks-delete" onClick={handleClick}>
        🗙
      </button>
    </li>
  );
}

export default TasksItem;
