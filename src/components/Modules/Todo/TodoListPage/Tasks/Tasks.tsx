import { Task } from '../../../../../@types';
import TasksItem from './TasksItem';


interface TasksProps {
  listTask: Task[];
  updateTask: (id: number, updatedTaskData: any) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  updateTaskName: (id: number, updatedTaskData: any) => Promise<void>;
}

function Tasks({ listTask, updateTask, deleteTask, updateTaskName }: TasksProps) {
  return (
    <div className="card max-md:w-full w-1/2 bg-base-100 shadow-xl">
      {listTask.map((task) => (
        <TasksItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          updateTaskName={updateTaskName}
          
        />
      ))}
    </div>
  );
}

export default Tasks;