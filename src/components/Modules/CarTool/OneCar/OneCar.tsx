import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import iconVoiture from '../../../../assets/icon-voiture.png';
import iconCamion from '../../../../assets/icon-camion.png';
import iconMoto from '../../../../assets/icon-moto.png';
import CreateMaintenance from './Form/CreateMaintenance';
import EditCarData from './Form/EditCarData';

const API_URL = 'http://localhost:3002/api';

function OneCar() {
  const [newMaintenances, setNewMaintenances] = useState([]);

  const [car, setCar] = useState([]);
  const { carId } = useParams();

  const handleSubmit = (newMaintenanceData) => {
    // Ici, tu peux gérer les données nouvellement enregistrées, si nécessaire

    console.log('Nouvel entretien enregistré :', newMaintenanceData);
    // Mettre à jour la variable newMaintenances avec les nouveaux entretiens
    setNewMaintenances([...newMaintenances, newMaintenanceData]);
  };
  // État local pour gérer les nouveaux entretiens

  const getCarDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/car/${carId}`);
      const carData = response.data[0];
      setCar(carData);
      console.log('Détails de la voiture:', response.data);
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des détails de la voiture:',
        error
      );
    }
  };
  console.log('car', car);
  console.log('le NAme', car.name);

  useEffect(() => {
    getCarDetails();
  }, []);

  return (
    <div className="bg-base-200 min-h-screen h-full px-20">
      <div className="pt-8">
        <h1 className="text-4xl mb-10 text-center">{car.name}</h1>
      </div>
      <div className="flex justify-between items-center mb-8 px-60">
        <div>
          <figure>
            {/* Condition d'affichage de l'icône en fonction du type de véhicule */}
            {car.type === 'Voiture' && (
              <img src={iconVoiture} alt="Icon voiture" />
            )}
            {car.type === 'Camion' && (
              <img src={iconCamion} alt="Icon camion" />
            )}
            {car.type === 'Moto' && <img src={iconMoto} alt="Icon moto" />}
          </figure>
        </div>
        <div className="max-w-md ">
          <EditCarData car={car} setCar={setCar} />
        </div>
      </div>
      <div>
        <CreateMaintenance
          onSubmit={handleSubmit}
          newMaintenances={newMaintenances}
        />
      </div>
      <div></div>
    </div>
  );
}

export default OneCar;
