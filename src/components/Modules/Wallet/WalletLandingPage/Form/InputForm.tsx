import { useState } from 'react';
import WalletIconForm from './IconForm';
import FormIncompleteAlert from '../../../../../modals/FormIncompleteAlert';
import { useAppSelector } from '../../../../../hooks/redux';

function WalletInputForm({ onSubmit }) {
  const userId = useAppSelector((state) => Number(state.user.userId));
  
  const [selectedIcon, setSelectedIcon] = useState(null);

  const [WalletDetails, setWalletDetails] = useState({
    name: '',
    icon: '',
    userId: userId
  });

  const [formIncomplete, setFormIncomplete] = useState(false);

  // Fonction pour gérer le changement des détails du document
  const handleInputChange = (event) => {
    // ici, on récupère le nom et la valeur de l'input
    const { name, value } = event.target;
    // ici, on met à jour le state avec les détails du document, en utilisant le spread operator pour garder les valeurs précédentes
    setWalletDetails({ ...WalletDetails, [name]: value });
  };

    // Fonction pour gérer la sélection d'une icône
    const handleIconSelection = (selectedIcon) => {
      setWalletDetails({ ...WalletDetails, icon: selectedIcon });
      console.log("selectedIcon",selectedIcon);
    };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!WalletDetails.icon || !WalletDetails.name) {
      setFormIncomplete(true);
      return;
    }
    
    // ici, on crée un objet avec les détails du document et le fichier sélectionné
    onSubmit(WalletDetails);
console.log("WalletDetails",WalletDetails)

    // Réinitialiser le formulaire
    setWalletDetails({
      name: '',
      icon: '',
     
    });

    setFormIncomplete(false);
    setSelectedIcon(null)
  };
  
  const handleCloseAlert = () => {
    setFormIncomplete(false);
  };

 

  return (
    <div>
         {formIncomplete && <FormIncompleteAlert  onClose={handleCloseAlert} />}
      <form  onSubmit={handleSubmit} className="flex justify-around  items-center pb-5">
      <label htmlFor="name"></label>
        <div className="flex-auto ">
          <input
            type="text"
            onChange={handleInputChange}
            name="name"
            id="name"
            value={WalletDetails.name}
            placeholder="Ajouter un portefeuille de document"
            className="input input-bordered border-[var(--color-primary-500)] w-full"
          />
        </div>
        
        <WalletIconForm 
        onIconSelection={handleIconSelection}  
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}    />

        <div className="pl-2" onClick={handleSubmit}>
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
