import { useState } from 'react';
import WalletIconForm from './IconForm';

function WalletInputForm({ onSubmit }) {
  const [WalletDetails, setWalletDetails] = useState({
    id: 1,
    icon: '',
    description: '',
  });

  const [nextId, setNextId] = useState(2); // Le prochain id disponible commence à partir de 2 (le premier id est 1)

  // Fonction pour gérer le changement des détails du wallet
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWalletDetails({ ...WalletDetails, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const newWallet = { ...WalletDetails, id: nextId }; // Utilise le prochain id disponible
    onSubmit(newWallet);

    // Incrémente le prochain id disponible pour le prochain wallet
    setNextId((prevNextId) => prevNextId + 1);

    // Réinitialise le formulaire
    setWalletDetails({
      id: nextId, // Remet l'id à la valeur actuelle de nextId pour le prochain wallet
      icon: '',
      description: '',
    });
  };

  return (
    <div>
      <form  onSubmit={handleSubmit} className="flex justify-around  items-center pb-5">
      <label htmlFor="name"></label>
        <div className="flex-auto ">
          <input
            type="text"
            onChange={handleInputChange}
            name="description"
            id="description"
            value={WalletDetails.description}
            placeholder="Ajouter un portefeuille de document"
            className="input input-bordered border-[var(--color-primary-500)] w-full"
          />
        </div>
        <WalletIconForm />
        <div className="pl-2">
          <button className="btn bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-200)] text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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
    </div>
  );
}

export default WalletInputForm;
