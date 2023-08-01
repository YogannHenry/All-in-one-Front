import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import iconVoiture from '../../../../assets/icon-voiture.png';
import iconCamion from '../../../../assets/icon-camion.png';
import iconMoto from '../../../../assets/icon-moto.png';
import CreateMaintenance from './Form/CreateMaintenance';
import EditCarData from './Form/EditCarData';
import EditMaintenanceData from './Form/EditMaintenanceData';
import API_URL from '../../../API_URL';



function OneCar() {
  const [car, setCar] = useState([]);
  const [maintenances, setMaintenances] = useState([]);
  const { carId } = useParams();

  const getCarDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/car/${carId}`);
      const carData = response.data[0];
      setCar(carData);
      console.log('Détails de la voiture:', response.data);
      // Appel API pour récupérer les maintenances de la voiture
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des détails de la voiture:',
        error
      );
    }
  };
  //console.log('car', car);
  //.log('le NAme', car.name);

  const getMaintenanceDetails = async () => {
    try {
      // Appel API pour récupérer les maintenances de la voiture
      const maintenanceResponse = await axios.get(
        `${API_URL}/car/${carId}/maintenance`
      );
      const maintenancesData = maintenanceResponse.data;
      setMaintenances(maintenancesData);
      console.log('Maintenances de la voiture:', maintenancesData);
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des détails de la Maintenances:',
        error
      );
    }
  };

  const addMaintenance = async (carId, newMaintenanceData) => {
    try {
      await axios.post(
        `${API_URL}/car/${carId}/maintenance`,
        newMaintenanceData
      );
      getMaintenanceDetails();
    } catch (error) {
      console.error("Erreur lors de la création de l'entretien:", error);
    }
  };

  const handleAddMaintenance = (newMaintenanceData) => {
    addMaintenance(carId, newMaintenanceData);
  };

  const deleteMaintenance = async (maintenanceId) => {
    try {
      await axios.delete(`${API_URL}/car/maintenance/${maintenanceId}`);
      // Si la suppression réussit, vous pouvez effectuer une action supplémentaire ici, comme actualiser la liste des maintenances, etc.
      getMaintenanceDetails();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'entretien:", error);
    }
  };

  const handleDeleteMaintenance = (maintenanceId) => {
    deleteMaintenance(maintenanceId);
  };

  const updateMaintenance = async (maintenanceId, updatedMaintenanceData) => {
    try {
      await axios.put(
        `${API_URL}/car/maintenance/${maintenanceId}`,
        updatedMaintenanceData
      );
      // Si la mise à jour réussit, vous pouvez effectuer une action supplémentaire ici, comme actualiser la liste des maintenances, etc.
      getMaintenanceDetails();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'entretien:", error);
    }
  };

  const handleUpdateMaintenance = (maintenanceId, updatedMaintenanceData) => {
    updateMaintenance(maintenanceId, updatedMaintenanceData);
  };

  useEffect(() => {
    getCarDetails();
    getMaintenanceDetails();
  }, []);

  return (
    <div className="bg-base-200 min-h-screen h-full px-20">
      <div className="pt-8">
        <h1 className="text-4xl mb-10 text-center uppercase">{car.name}</h1>
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
          <EditCarData
            car={car}
            setCar={setCar}
            updateCarDetails={getCarDetails}
          />
        </div>
      </div>
      <div>
        <CreateMaintenance onSubmit={handleAddMaintenance} />
      </div>
      <div>
        {maintenances.length > 0 ? (
          <EditMaintenanceData
            maintenances={maintenances}
            handleDeleteMaintenance={handleDeleteMaintenance}
            handleUpdateMaintenance={handleUpdateMaintenance}
          />
        ) : (
          <p>Aucun entretien disponible pour cette voiture.</p>
        )}
      </div>
    </div>
  );
}

export default OneCar;
