import { useState } from 'react';

function EditCarData() {
  const [carData, setCarData] = useState({
    Modele: 'BMW Série 3',
    KmMois: '1200',
    TypeVehicules: 'Voiture',
    KmActuel: '126000',
  });

  // État pour la gestion de l'édition
  const [isEditing, setIsEditing] = useState(false);

  // Fonction pour gérer le clic sur le bouton "Modifier"
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Fonction pour gérer le clic sur le bouton "Enregistrer"
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Modèle:
              <input
                type="text"
                value={carData.Modele}
                onChange={(e) =>
                  setCarData({ ...carData, Modele: e.target.value })
                }
                className="border rounded px-2 py-1 w-48"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Km par mois:
              <input
                type="text"
                value={carData.KmMois}
                onChange={(e) =>
                  setCarData({ ...carData, KmMois: e.target.value })
                }
                className="border rounded px-2 py-1 w-48"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Type de véhicule:
              <select
                className="select select-bordered w-full max-w-xs"
                value={carData.TypeVehicules}
                onChange={(e) =>
                  setCarData({ ...carData, TypeVehicules: e.target.value })
                }
              >
                <option disabled selected>
                  Type de véhicules
                </option>
                <option value="Voiture">Voiture</option>
                <option value="Moto">Moto</option>
                <option value="Camion">Camion</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Km actuel:
              <input
                type="text"
                value={carData.KmActuel}
                onChange={(e) =>
                  setCarData({ ...carData, KmActuel: e.target.value })
                }
                className="border rounded px-2 py-1 w-48"
              />
            </label>
          </div>
          <button
            onClick={handleSaveClick}
            className="btn bg-red-300 hover:bg-red-500 text-white mt-4"
          >
            Enregistrer
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-2 font-semibold">Modèle: {carData.Modele}</p>
          <p className="mb-2 font-semibold">Km par mois: {carData.KmMois}</p>
          <p className="mb-2 font-semibold">
            Type de véhicule: {carData.TypeVehicules}
          </p>
          <p className="mb-2 font-semibold">Km actuel: {carData.KmActuel}</p>
          <button
            onClick={handleEditClick}
            className="btn bg-red-300 hover:bg-red-500 text-white mt-4"
          >
            Modifier
          </button>
        </div>
      )}
    </div>
  );
}

export default EditCarData;
