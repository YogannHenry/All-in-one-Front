import { useState } from 'react';
import WalletIconForm from './IconForm';

function WalletInputForm({ onSubmit }) {

  const [WalletDetails, setWalletDetails] = useState({
    icon: '',
    description: '',
  });

  // Fonction pour gérer le changement des détails du document
  const handleInputChange = (event) => {
    // ici, on récupère le nom et la valeur de l'input
    const { name, value } = event.target;
    // ici, on met à jour le state avec les détails du document, en utilisant le spread operator pour garder les valeurs précédentes
    setWalletDetails({ ...WalletDetails, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // ici, on crée un objet avec les détails du document et le fichier sélectionné
    onSubmit(WalletDetails);


    // Réinitialiser le formulaire
    setWalletDetails({
      icon: '',
      description: '',
     
    });
  };

  return (
    <div>
      <div className="flex justify-around  items-center pb-5">
        <div className="flex-auto ">
          <input
            type="text"
            onClick={handleSubmit}
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
      </div>
    </div>
  );
}

export default WalletInputForm;
