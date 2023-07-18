import { useState } from 'react';

function CarsForm() {
  // État local pour gérer l'ouverture de la div
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus"
  const handlePlusButtonClick = () => {
    setIsFormOpen(!isFormOpen); // Inverse l'état d'ouverture
  };
  return (
    <div>
      <div className="flex justify-center mt-4">
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
      </div>

      {/* Espace à ouvrir */}
      {isFormOpen && (
        <div className="flex justify-center pb-8 mt-4">
          <div className="bg-white shadow p-4 w-1/3 rounded-lg">
            <form onSubmit="">
              <div className="p-4 mt-4 flex flex-col md:flex-row">
                <div className="mr-2 mb-4 md:mb-0 md:flex-1">
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
                <div className="md:flex-1">
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
              </div>
              <div className="p-4 mt-4 flex flex-col md:flex-row">
                <div className="mr-2 mb-4 md:mb-0 md:flex-1">
                  <label className="block font-bold mb-2">
                    Type de véhicules :
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Type de véhicules
                    </option>
                    <option>Voiture</option>
                    <option>Moto</option>
                    <option>Camion</option>
                  </select>
                </div>
                <div className="md:flex-1">
                  <label className="block font-bold mb-2">Km actuel :</label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs mb-2"
                    name="kmActuel"
                    placeholder="Entrez les kilomètres Actuel"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-red-300 hover:bg-red-500 text-white mt-4"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default CarsForm;
