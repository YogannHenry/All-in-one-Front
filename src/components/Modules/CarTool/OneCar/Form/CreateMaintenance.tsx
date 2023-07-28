import { useState } from 'react';
import { format } from 'date-fns';

function CreateMaintenance({ onSubmit }) {
  // État local pour gérer l'ouverture de la div
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [timeUnit, setTimeUnit] = useState('years');

  const [newMaintenanceData, setNewMaintenanceData] = useState({
    name: '', // Valeur initiale vide
    last_date_verif: new Date().toISOString().split('T')[0],
    validity_km: '',
    last_km_verif: '',
    validity_period: '',
  });

  // Fonction pour gérer le clic sur le bouton "Plus"
  const handlePlusButtonClick = () => {
    setIsFormOpen(!isFormOpen); // Inverse l'état d'ouverture
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedDate = format(
      new Date(newMaintenanceData.last_date_verif),
      'yyyy-MM-dd'
    );

    // Vérifier si last_km_verif est un nombre valide
    const lastKmVerifNumber = parseInt(newMaintenanceData.last_km_verif, 10);
    if (isNaN(lastKmVerifNumber)) {
      console.error('Le champ "Dernier Entretien" doit être un nombre');
      return;
    }

    // Vérifier si last_km_verif est rempli
    if (newMaintenanceData.last_km_verif === '') {
      console.error('Le champ "Dernier Entretien" est requis');
      return;
    }

    const newMaintenanceDataFormatted = {
      ...newMaintenanceData,
      last_date_verif: formattedDate,
      last_km_verif: lastKmVerifNumber,
    };

    onSubmit(newMaintenanceDataFormatted);
    setIsFormOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMaintenanceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex mt-4">
        <button
          className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white"
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
                    Sélectionnez un type d'entretien
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    name="name"
                    value={newMaintenanceData.name}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Sélectionnez un type d'entretien
                    </option>
                    <option value="Pneu">Pneu</option>
                    <option value="Vidange">Vidange</option>
                    <option value="Courroie">Courroie</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-2">
                    Dernier Entretien :
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full max-w-xs mb-2"
                    placeholder="Entrez le nombre de KM"
                    name="last_km_verif"
                    value={newMaintenanceData.last_km_verif}
                    onChange={handleChange}
                  />
                  <label htmlFor="date" className="block font-bold mb-2">
                    Date du dernier entretien :
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="last_date_verif"
                    value={newMaintenanceData.last_date_verif}
                    onChange={handleChange}
                    className="mb-4"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2">
                    Entretien à effectuer tout les :
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full max-w-xs mb-2"
                    placeholder="Entrez le nombre de KM"
                    value={newMaintenanceData.validity_km}
                    onChange={handleChange}
                    name="validity_km"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2">
                    Entretien à effectuer tous les :
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      className="input input-bordered w-full max-w-xs mr-2"
                      placeholder="Entrez la valeur"
                      name="validity_period"
                      value={newMaintenanceData.validity_period}
                      onChange={handleChange}
                    />
                    <select
                      className="select select-bordered max-w-xs"
                      name="time_unit"
                      value={timeUnit}
                      onChange={(e) => setTimeUnit(e.target.value)}
                    >
                      <option value="years">années</option>
                      <option value="months">mois</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white mt-4"
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
