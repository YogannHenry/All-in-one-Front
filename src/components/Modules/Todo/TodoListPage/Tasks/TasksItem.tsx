import { Task } from '../../../../../@types';

interface TasksItemProps {
  task: Task;
  updateTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

function TasksItem({ task, updateTask, deleteTask }: TasksItemProps) {
  const { id, label, done } = task;

  function handleChange() {
    updateTask(id);
  }

  function handleClick() {
    deleteTask(id);
  }

  return (
    <li className="tasks-item">
      <label className={done ? 'rounded block flex-grow line-through opacity-50' : 'rounded block flex-grow'}>
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
