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

    // on veut utiliser le _endpoint_ POST /tasks
    // pour ajouter une tâche
    // ça retourne la liste des tâches mise à jour,
    // il faudra enregistrer cette liste dans notre état
    // → on fait ça dans <App />
    // → on diffuse la fonction via les props et on l'exécute
    addTask(newTask);

    // une fois soumis, on efface la valeur de l'input
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
