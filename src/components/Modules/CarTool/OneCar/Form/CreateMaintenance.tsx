import { useState } from 'react';

function CreateMaintenance() {
  // État local pour gérer l'ouverture de la div
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Plus"
  const handlePlusButtonClick = () => {
    setIsFormOpen(!isFormOpen); // Inverse l'état d'ouverture
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setIsFormOpen(false);
  };

  return (
    <div>
      <div className="flex mt-4">
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
        <div className="flex justify-center pb-8">
          <div className="bg-white shadow p-4 sm:w-1/3 rounded-lg flex flex-col">
            <form onSubmit={handleSubmit}>
              <div className="p-4 mt-4">
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">
                    Creer un suivi :{' '}
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Entretien
                    </option>
                    <option value="Voiture">Pneu</option>
                    <option value="Moto">Vidange</option>
                    <option value="Camion">Courroie</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-2">
                    Dernier Entretien :
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs mb-2"
                    placeholder="Entrez le nombre de KM"
                  />
                  <label htmlFor="date" className="block font-bold mb-2">
                    le :
                  </label>
                  <input type="date" id="date" name="date" className="mb-4" />
                </div>
                <div>
                  <label className="block font-bold mb-2">
                    Entretien à effectuer tout les :
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs mb-2"
                    placeholder="Entrez le nombre de KM"
                  />
                </div>
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

export default CreateMaintenance;
