import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../../../API_URL'

interface CarDataProps {
  id: number;
  name: string;
  km_per_month: number;
  type: string;
  current_km: number;
  icon:string;
  created_at:string;
  updated_at:string;
}

interface EditCarDataProps {
  car: CarDataProps;
  setCar: React.Dispatch<React.SetStateAction<CarDataProps>>;
  updateCarDetails: () => void;
}

function EditCarData({ car, setCar, updateCarDetails }: EditCarDataProps) {
 
  // État pour la gestion de l'édition
  const [isEditing, setIsEditing] = useState(false);
  const { carId } = useParams();
  const [carData, setCarData] = useState<CarDataProps>({
    id: 0,
    name: '', // Valeur initiale vide
    km_per_month: 0,
    type: '',
    current_km: 0,
    icon:'',
    created_at:'',
    updated_at:'',
  });
  // Fonction pour gérer le clic sur le bouton "Modifier"
  const handleEditClick = () => {
    setCarData({ ...car });
    setIsEditing(true);
  };

  // Fonction pour gérer le clic sur le bouton "Enregistrer"
  const handleSaveClick = async () => {
    try {
      const { id, icon, created_at, updated_at, ...dataWithoutParams } =
        carData;

      const response = await axios.put(
        `${API_URL}/car/${carId}`,
        dataWithoutParams
      );
      setCar(response.data); // Mettre à jour l'état avec les nouvelles données
      setIsEditing(false); // Sortir du mode édition
      updateCarDetails();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement des données : ", error);
      // Gérer les erreurs ici si nécessaire
    }
  };

  console.log('carData apres les modifff:', carData);

  return (
    <div>
      {isEditing ? (
        <div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Modèle:
              <input
                type="text"
                value={carData.name || ''}
                onChange={(e) =>
                  setCarData({ ...carData, name: e.target.value })
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
                value={carData.km_per_month || ''}
                onChange={(e) =>
                  setCarData({ ...carData, km_per_month: parseInt(e.target.value, 10) })
                }
                className="border rounded px-2 py-1 w-48"
              />
              <span className="font-bold mb-2">Km</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Type de véhicule:
              <select
                name="type"
                className="select select-bordered w-full max-w-xs"
                value={carData.type || ''}
                onChange={(e) =>
                  setCarData({ ...carData, type: e.target.value })
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
                value={carData.current_km || ''}
                onChange={(e) =>
                  setCarData({ ...carData, current_km: parseInt(e.target.value, 10) })
                }
                className="border rounded px-2 py-1 w-48"
              />
              <span className="font-bold mb-2">Km</span>
            </label>
          </div>
          <button
            onClick={handleSaveClick}
            className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white mt-4"
          >
            Enregistrer
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-2 font-semibold">Modèle: {car.name}</p>
          <p className="mb-2 font-semibold">Km par mois: {car.km_per_month}</p>
          <p className="mb-2 font-semibold">Type de véhicule: {car.type}</p>
          <p className="mb-2 font-semibold">Km actuel: {car.current_km}</p>
          <button
            onClick={handleEditClick}
            className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white mt-4"
          >
            Modifier
          </button>
        </div>
      )}
    </div>
  );
}

export default EditCarData;
