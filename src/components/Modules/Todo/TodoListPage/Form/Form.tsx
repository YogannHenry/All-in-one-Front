import { useState } from 'react';

import './style.scss';

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

    setNewTask('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        placeholder="Ajouter une tâche"
        aria-label="Ajouter une tâche"
        value={newTask}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
