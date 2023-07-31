import { useState } from 'react';

interface FormProps {
  addList: (newList: string) => Promise<void>;
}

function Form({ addList}: FormProps) {
  const [newList, setNewList] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewList(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
     addList(newList)
    setNewList('');
  }

  return (
    <form onSubmit={handleSubmit}  className="card w-full bg-base-100 shadow-xl mb-10">
    <div className="flex justify-between">
      <div className="flex-grow">
        <input
        value={newList}
        onChange={handleChange}
          type="text"
          placeholder="Ajouter une Liste"
          className="input input-bordered border-[var(--color-primary-300)] w-full mr-2"
        />
      </div>
      <button className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  </form>
  );
}

export default Form;
