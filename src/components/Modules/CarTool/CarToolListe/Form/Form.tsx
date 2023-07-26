import { useState } from 'react';

function CarsForm({ onAddCar }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newCar, setNewCar] = useState({
    modele: '',
    kmMois: '',
    typeVehicules: '',
    kmActuel: '',
  });

  const vehicleTypes = ['Voiture', 'Moto', 'Camion'];

  const handlePlusButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newCar.modele.trim() &&
      newCar.kmMois.trim() &&
      newCar.typeVehicules &&
      newCar.kmActuel.trim()
    ) {
      // Appeler la fonction onAddCar du composant parent pour ajouter la nouvelle voiture
      onAddCar(newCar);
      setNewCar({
        modele: '',
        kmMois: '',
        typeVehicules: '',
        kmActuel: '',
      });
      setIsFormOpen(false);
    } else {
      alert('Veuillez remplir toutes les informations du formulaire.');
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <button
          className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white"
          onClick={handlePlusButtonClick}
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

      {isFormOpen && (
        <div className="flex justify-center pb-8">
          <div className="bg-white shadow p-4 sm:w-1/3 rounded-lg flex flex-col">
            <form onSubmit={handleSubmit}>
              <div className="p-4 mt-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Modèle :
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    name="modele"
                    value={newCar.modele}
                    onChange={handleChange}
                    placeholder="Entrez le modèle"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Km/mois :
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    name="kmMois"
                    value={newCar.kmMois}
                    onChange={handleChange}
                    placeholder="Entrez les kilomètres par mois"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2">
                    Type de véhicules :
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    name="typeVehicules"
                    value={newCar.typeVehicules}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Choisissez le type de véhicules
                    </option>
                    {vehicleTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-2">Km actuel :</label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs mb-2"
                    name="kmActuel"
                    value={newCar.kmActuel}
                    onChange={handleChange}
                    placeholder="Entrez les kilomètres Actuel"
                  />
                </div>
              </div>
              <div className="flex justify-center">
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

export default CarsForm;
