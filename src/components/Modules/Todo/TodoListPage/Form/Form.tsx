import { useState } from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

interface FormProps {
  addTask: (newTask: string) => Promise<void>;
}

function Form({ addTask }: FormProps) {
  const [newTask, setNewTask] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTask(newTask);
    console.log('newTask', newTask);
    setNewTask('');
  }

  return (
    <form
      className="max-md:px-4 align-center max-lg:w-full w-1/2"
      onSubmit={handleSubmit}
    >
      <NavLink to="/list" className="btn bg-[var(--color-primary-300)] mr-10 mb-2">
        <ArrowUturnLeftIcon className="h-10 w-10 text-white" />
      </NavLink>
      <div className="card max-md:w-full  bg-red-400 shadow-xl mb-10">
        <input
          type="text"
          className="input input-bordered border-[var(--color-primary-300)] w-full "
          placeholder="Ajouter une tâche"
          aria-label="Ajouter une tâche"
          value={newTask}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default Form;
