import Voiture from '../../../../assets/icon-voiture.png';
import { useState } from 'react';

const CarsData = [
  {
    id: '1',
    Modele: 'BMW Série 3',
    KmMois: '1200',
    TypeVehicules: 'Voiture',
    KmActuel: '126000',
  },
  {
    id: '2',
    Modele: 'BMW Série 1',
    KmMoyenMois: '566',
    TypeVehicules: 'Voiture',
    KmActuel: '5000',
  },
  {
    id: '3',
    Modele: 'Porsche GT2 RS',
    KmMoyenMois: '200',
    TypeVehicules: 'Voiture',
    KmActuel: '800',
  },
];

function CarsList2() {
  // État local pour gérer l'ouverture de la div
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [modele, setModele] = useState('');
  const [kmMois, setKmMois] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const modele = e.target.modele.value;
    const kmMois = e.target.kmMois.value;
    ajouterNouvelleVoiture(modele, kmMois);
    setIsFormOpen(false);
    // Traitez les informations ici, par exemple, en ajoutant une nouvelle voiture à la liste
    // Vous pouvez accéder aux valeurs des champs de saisie via les états modele et kmMois
    // Exemple : ajouterNouvelleVoiture(modele, kmMois);
    // setModele('');
    // setKmMois('');
    // setIsFormOpen(false);
  };

  // Fonction pour gérer le clic sur le bouton "Plus"
  const handlePlusButtonClick = () => {
    setIsFormOpen(!isFormOpen); // Inverse l'état d'ouverture
  };
  return (
    <div className="bg-base-200 h-screen">
      <div>
        <h1 className="text-4xl mb-10 flex justify-center">CarTool</h1>
      </div>
      <div className="flex justify-center space-x-4 ">
        {CarsData.map((car) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={car.id}>
            <figure>
              <img src={Voiture} alt="Icon voiture" />
            </figure>
            <div className="card-body flex items-center">
              <div className="flex-grow" />
              <h2 className="card-title">{car.Modele}</h2>
              <button className="btn bg-red-300 hover:bg-red-500 text-white ml-2">
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn bg-red-300 hover:bg-red-500 text-white"
        onClick={handlePlusButtonClick} // Déclenche la fonction lors du clic sur le bouton
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="BoutonPlus w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      {/* Espace à ouvrir */}
      {isFormOpen && (
        <div className="bg-white shadow p-4 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Modèle :
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="modele"
                placeholder="Entrez le modèle"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Km/mois :
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="kmMois"
                placeholder="Entrez les kilomètres par mois"
              />
            </div>
            <button
              type="submit"
              className="btn bg-red-300 hover:bg-red-500 text-white mt-4"
            >
              Enregistrer
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CarsList2;
