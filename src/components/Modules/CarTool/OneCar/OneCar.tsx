import { useState } from 'react';
import Voiture from '../../../../assets/icon-voiture.png';
import CreateMaintenance from './Form/CreateMaintenance';
import EditCarData from './Form/EditCarData';

function OneCar() {
  const handleSubmit = (newMaintenanceData) => {
    // Ici, tu peux gérer les données nouvellement enregistrées, si nécessaire

    console.log('Nouvel entretien enregistré :', newMaintenanceData);
    // Mettre à jour la variable newMaintenances avec les nouveaux entretiens
    setNewMaintenances([...newMaintenances, newMaintenanceData]);
  };

  // État local pour gérer les nouveaux entretiens
  const [newMaintenances, setNewMaintenances] = useState([]);

  return (
    <div className="bg-base-200 min-h-screen h-full px-8">
      <div className="pt-8">
        <h1 className="text-4xl mb-10 text-center">Nom de la voiture</h1>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <figure className="mr-8">
            <img src={Voiture} alt="Icon voiture" className="" />
          </figure>
        </div>
        <div className="max-w-md">
          <EditCarData />
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
