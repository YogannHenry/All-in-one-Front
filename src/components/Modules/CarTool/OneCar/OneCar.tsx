import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import iconVoiture from '../../../../assets/icon-voiture.png';
import iconCamion from '../../../../assets/icon-camion.png';
import iconMoto from '../../../../assets/icon-moto.png';
import CreateMaintenance, {
  CreateMaintenanceDataProps,
} from './Form/CreateMaintenance';
import EditCarData from './Form/EditCarData';
import EditMaintenanceData, {
  EditMaintenanceDataProps,
} from './Form/EditMaintenanceData';
import { getAPI } from '../../../../utils/config';
import authConnexion from '../../../../hooks/authConnexion';

interface CarDetailsProps {
  id: number;
  name: string;
  km_per_month: number;
  type: 'Voiture' | 'Camion' | 'Moto';
  current_km: number;
  icon: string;
  created_at: string;
  updated_at: string;
}

function OneCar() {
  const { isUserLogged } = authConnexion();
  const [maintenances, setMaintenances] = useState<EditMaintenanceDataProps[]>(
    []
  );
  const { carId } = useParams();
  const [car, setCar] = useState<CarDetailsProps>({
    id: 0,
    name: '',
    km_per_month: 0,
    type: 'Voiture',
    current_km: 0,
    icon: '',
    created_at: '',
    updated_at: '',
  });


  const getCarDetails = async () => {
    try {
      const response = await getAPI().get(`/car/${carId}`);
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
      const maintenanceResponse = await getAPI().get(
        `/car/${carId}/maintenance`
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

  const addMaintenance = async (
    carId: number,
    newMaintenanceData: CreateMaintenanceDataProps
  ) => {
    try {
      await getAPI().post(`/car/${carId}/maintenance`, newMaintenanceData);
      getMaintenanceDetails();
    } catch (error) {
      console.error("Erreur lors de la création de l'entretien:", error);
    }
  };
  const handleAddMaintenance = (
    newMaintenanceData: CreateMaintenanceDataProps
  ) => {
    if (carId !== undefined) {
      // carId est défini, vous pouvez appeler addMaintenance avec carId
      addMaintenance(parseInt(carId, 10), newMaintenanceData);
    } else {
      console.error(
        "carId est pas definie. impossible d'ajouter la maintenance"
      );
      // Faites quelque chose d'autre en cas de carId indéfini si nécessaire
    }
  };

  const deleteMaintenance = async (maintenanceId: number) => {
    try {
      await getAPI().delete(`/car/maintenance/${maintenanceId}`);
      // Si la suppression réussit, vous pouvez effectuer une action supplémentaire ici, comme actualiser la liste des maintenances, etc.
      getMaintenanceDetails();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'entretien:", error);
    }
  };

  const updateMaintenance = async (
    maintenanceId: number,
    updatedMaintenanceData: EditMaintenanceDataProps
  ) => {
    try {
      await getAPI().put(
        `/car/maintenance/${maintenanceId}`,
        updatedMaintenanceData
      );
      // Si la mise à jour réussit, vous pouvez effectuer une action supplémentaire ici, comme actualiser la liste des maintenances, etc.
      getMaintenanceDetails();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'entretien:", error);
    }
  };

  const handleUpdateMaintenance = (
    maintenanceId: number,
    updatedMaintenanceData: EditMaintenanceDataProps
  ) => {
    updateMaintenance(maintenanceId, updatedMaintenanceData);
  };

  useEffect(() => {
    getCarDetails();
    getMaintenanceDetails();
  }, [isUserLogged]);

  return (
    <div className="bg-gradient-to-t from-[var(--color-primary-100)]  via-[var(--color-primary-50)]  to-[var(--color-primary-50)] px-20">
      <div className=" flex flex-col items-center ">
        <h1 className="text-4xl mb-2 pt-10 text-center uppercase">
          {car.name}
        </h1>

        <div className="flex justify-between max-lg:flex-col gap-2 lg:w-3/6">
          <div className="w-[350px] flex items-center justify-around   h-[350px] bg-white border rounded-3xl max-lg:hidden ">
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
          <div className="max-w-md  bg-white border rounded-3xl">
            <EditCarData
              car={car}
              setCar={setCar}
              updateCarDetails={getCarDetails}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  ">
      <div className="flex flex-col  justify-evenly  lg:w-3/6">
        <CreateMaintenance onSubmit={handleAddMaintenance} />
        <div>
          {maintenances.length > 0 ? (
            <EditMaintenanceData
              maintenances={maintenances}
              deleteMaintenance={deleteMaintenance}
              handleUpdateMaintenance={handleUpdateMaintenance}
            />
          ) : (
            <p>Aucun entretien disponible pour cette voiture.</p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default OneCar;
