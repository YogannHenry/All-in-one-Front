import { useState } from 'react';



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
    <form className="flex items-center flex-col p-20 h-screen bg-base-200" onSubmit={handleSubmit}>
        <p className="text-4xl mb-10">Nom de la liste</p>
        <div className="card w-1/2 bg-base-100 shadow-xl mb-10"></div>
      <input
        type="text"
        className="input input-bordered input-error w-full "
        placeholder="Ajouter une tâche"
        aria-label="Ajouter une tâche"
        value={newTask}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
