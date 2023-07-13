import { Task } from '../../../@types';
import TasksItem from './TasksItem';
import './style.scss';

interface TasksProps {
  list: Task[];
  updateTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

function Tasks({ list, updateTask, deleteTask }: TasksProps) {
  return (
    <ul className="tasks">
      {list.map((task) => (
        <TasksItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default Tasks;
