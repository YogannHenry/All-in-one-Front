import { useState } from 'react';
import Tasks from '../Tasks/Tasks';
import { Task } from '../../../../../@types';

interface FormProps {
  addTask: (newTask: string) => Promise<void>;
  list: Task[];
  updateTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}


function TodoListPage2({ addTask, list, updateTask, deleteTask }: FormProps) {
  const [newTask, setNewTask] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTask(newTask);

    setNewTask('');
  }

  return (
    <form
      className="max-md:px-4 flex items-center flex-col pt-20 h-screen bg-base-200"
      onSubmit={handleSubmit}
    >
      <p className="text-4xl mb-10">Nom de la liste</p>
      <div className="card max-md:w-full  w-1/2 bg-base-100 shadow-xl mb-10"></div>
      <input
        type="text"
        className="input input-bordered border-[var(--color-primary-300)] w-full "
        placeholder="Ajouter une tâche"
        aria-label="Ajouter une tâche"
        value={newTask}
        onChange={handleChange}
      />
     <Tasks list={list} updateTask={updateTask} deleteTask={deleteTask}  />
    </form>
  );
}

export default TodoListPage2;
