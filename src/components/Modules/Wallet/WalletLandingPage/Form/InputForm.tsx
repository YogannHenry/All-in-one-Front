import { useState } from 'react';
import WalletIconForm from './IconForm';
import FormIncompleteAlert from '../../../../../modals/FormIncompleteAlert';
import { useAppSelector } from '../../../../../hooks/redux';
import { Wallet } from '../../../../../@types/index';


interface WalletInputFormProps {
  onSubmit: (wallet: Wallet) => void;
}

function WalletInputForm({ onSubmit }: WalletInputFormProps) {
  const userId = useAppSelector((state) => Number(state.user.userId));
  
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null);

  const [WalletDetails, setWalletDetails] = useState({
    id: 0,
    name: '',
    icon: '',
    userId: userId
  });

  const [formIncomplete, setFormIncomplete] = useState(false);

  // Fonction pour récupérer le name du wallet:
  const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setWalletDetails({ ...WalletDetails, [name]: value });
  };

    // Fonction pour récupérer la sélection du nom de l' icône  afin de l'ajouter dans le state du wallet
    const handleIconSelection = (selectedIcon: string) => {
      setWalletDetails({ ...WalletDetails, icon: selectedIcon });
    };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!WalletDetails.icon || !WalletDetails.name) {
      setFormIncomplete(true);
      return;
    }
    
    // ici, on crée un objet avec les détails du document
    onSubmit(WalletDetails);

    // Réinitialiser le formulaire
    setWalletDetails({ ...WalletDetails, name: '' });

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
        StringNameIconSelection={handleIconSelection}  
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
