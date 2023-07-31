import { Task } from '../../../../../@types';
import TasksItem from './TasksItem';


interface TasksProps {
  list: Task[];
  updateTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

function Tasks({ list, updateTask, deleteTask }: TasksProps) {
  return (
    <div className="card max-md:w-full w-1/2 bg-base-100 shadow-xl">
      {list.map((task) => (
        <TasksItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          
        />
      ))}
    </div>
  );
}

export default Tasks;
