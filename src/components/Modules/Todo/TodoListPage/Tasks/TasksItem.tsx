import { Task } from '../../../../../@types';

interface TasksItemProps {
  task: Task;
  updateTask: (id: number, updatedTaskData: Task) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

function TasksItem({ task, updateTask, deleteTask }: TasksItemProps) {
  const { id, name, status } = task;

  function handleChange() {
    const updatedTaskData = {
      status: !status,
    };
    updateTask(id, updatedTaskData);
  }


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
                <p>{name}</p>
              </div>
              <div className="card-actions justify-around opacity-0 hover:opacity-100">
                <button type="button" onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-[var(--color-primary-300)]"
                    fill="none"
                    viewBox="0 0 24 24"
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
        
        </div>
  );
}

export default TasksItem;
