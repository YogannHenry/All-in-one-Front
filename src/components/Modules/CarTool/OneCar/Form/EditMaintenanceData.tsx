import { useState } from 'react';
import { format } from 'date-fns';
import InfoCard from '../../../../../modals/InfoCard';
import {
  WrenchIcon,
  TrashIcon,
  PencilIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
} from '@heroicons/react/24/solid';

export interface EditMaintenanceDataProps {
  formattedDateNextMaintenance: string | number | Date;
  number_of_days_before_next_verif: number;
  id: number;
  name: string;
  last_date_verif: string;
  last_km_verif: number;
  validity_km: number;
  validity_period: string | { years: string; months: string };
  lastKmRemaining: number;
 
}

interface MaintenanceProps {
  maintenances: EditMaintenanceDataProps[];
  deleteMaintenance: (id: number) => void;
  handleUpdateMaintenance: (
    id: number,
    updatedMaintenance: EditMaintenanceDataProps
  ) => void;
}

interface CustomStyle {
  '--value': string;
  '--size': string;
  '--thickness': string;
}



function EditMaintenanceData({  maintenances,  deleteMaintenance,  handleUpdateMaintenance,}: MaintenanceProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedMaintenance, setEditedMaintenance] =
    useState<EditMaintenanceDataProps>({
      id: 0,
      name: '',
      last_date_verif: new Date().toISOString().split('T')[0],
      last_km_verif: 0,
      validity_km: 0,
      validity_period: '',
      lastKmRemaining: 0,
      formattedDateNextMaintenance: '',
      number_of_days_before_next_verif: 0,
      
    });

  const [timeUnit, setTimeUnit] = useState('years');

  const handleEditClick = (maintenance: EditMaintenanceDataProps) => {    
    setEditedMaintenance({ ...maintenance});
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const { name, last_date_verif, validity_km, last_km_verif, validity_period } = editedMaintenance;

    if (
      name &&
      typeof last_date_verif === 'string' &&
      last_date_verif.trim() &&
      typeof validity_km === 'number' &&
      typeof last_km_verif === 'number' &&
      validity_period
    ) {
      const formattedDate = format(new Date(last_date_verif), 'dd-MM-yyyy');

      const editedMaintenanceFormatted = {
        ...editedMaintenance,
        last_date_verif: formattedDate,
        validity_period: `${validity_period} ${timeUnit}`,
        console: console.log("validity_period", validity_period)
      };

      handleUpdateMaintenance(editedMaintenance.id, editedMaintenanceFormatted);
      setIsEditing(false);
    } else {
      alert('Veuillez remplir toutes les informations du formulaire.');
    }
  };

  const handleDeleteClick = (maintenanceId: number) => {
    console.log("maintenances", maintenances)
    deleteMaintenance(maintenanceId);
  };

  const pourcentageOfRemainingKm = (maintenance: EditMaintenanceDataProps) => {
    const pourcentage =
      (maintenance.lastKmRemaining * 100) / maintenance.validity_km;
    return pourcentage;
  };
  console.log("pourcentageOfRemainingKm",);


  return (
    <div className="flex justify-between  flex-col gap-8 ">
      {maintenances.map((maintenance) => (
        <div
          key={maintenance.id}
          className=" pb-10 shadow-xl p-4 rounded-lg  max-lg:w-[360px] w-full bg-slate-200"
        >
          {isEditing && editedMaintenance.id === maintenance.id ? (
            // Afficher le formulaire d'édition si le mode édition est activé et si la maintenance correspond à celle en cours d'édition
            <div>
              <label className="block mb-2 font-semibold">
                Type d'entretien :
                <select
                  value={editedMaintenance.name}
                  onChange={(e) =>
                    setEditedMaintenance({
                      ...editedMaintenance,
                      name: e.target.value,
                    })
                  }
                  className="border rounded px-2 py-1 w-48"
                >
                  <option value="Pneu">Pneu</option>
                  <option value="Vidange">Vidange</option>
                  <option value="Courroie">Courroie</option>
                </select>
              </label>
              <label className="block mb-2 font-semibold">
                Dernière date d'entretien :
                <input
                  type="date"
                  value={editedMaintenance.last_date_verif}
                  onChange={(e) =>
                    setEditedMaintenance({
                      ...editedMaintenance,
                      last_date_verif: e.target.value,
                    })
                  }
                  className="border rounded px-2 py-1 w-48"
                />
              </label>
              <label className="block mb-2 font-semibold">
                Dernier entretien :
                <input
                  type="number"
                  value={editedMaintenance.last_km_verif}
                  onChange={(e) =>
                    setEditedMaintenance({
                      ...editedMaintenance,
                      last_km_verif: parseInt(e.target.value, 10),
                    })
                  }
                  className="border rounded px-2 py-1 w-48"
                />
                <span className="font-bold mb-2">Km</span>
              </label>
              <label className="block font-bold mb-2">
                Entretien à effectuer tout les :
              </label>
              <input
                type="number"
                className="border rounded px-2 py-1 w-48"
                placeholder="Entrez le nombre de KM"
                value={editedMaintenance.validity_km}
                onChange={(e) =>
                  setEditedMaintenance({
                    ...editedMaintenance,
                    validity_km: parseInt(e.target.value, 10),
                  })
                }
              />
              <span className="font-bold mb-2">Km</span>
              <label className="block font-bold mb-2">
                Entretien à effectuer tous les :
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs mr-2"
                  placeholder="Entrez la valeur"
                  name="validity_period"
                  value={
                    typeof editedMaintenance.validity_period === 'string'
                      ? editedMaintenance.validity_period
                      : `${
                          editedMaintenance.validity_period?.years || 0
                        } années ${
                          editedMaintenance.validity_period?.months || 0
                        } mois`
                  }
                  onChange={(e) =>
                    setEditedMaintenance({
                      ...editedMaintenance,
                      validity_period: e.target.value,
                    })
                  }
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
              <button
                onClick={handleSaveClick}
                className="btn bg-black hover:bg-[var(--color-primary-500)] text-white mt-4"
              >
                Enregistrer
              </button>
            </div>
          ) : (
            // Afficher les détails de la maintenance si le mode édition n'est pas activé
            // -------------------------------------------------------------------------
            // -------------------------------------------------------------------------

            // -------------------------------------------------------------------------

            // -------------------------------------------------------------------------

            <div className="">
              <div className="flex justify-between '">
                <div className="text-3xl max-lg:text-2xl flex  py-2">
                  <p className="ml-2 font-semibold ">Entretien : </p>
                  <span className="font-bold ml-4"> {maintenance.name}</span>
                </div>
                <div className="max-lg:flex max-lg:flex-col">
                  <button
                    className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white m-2"
                    name="modifier"
                    onClick={() => handleEditClick(maintenance)}
                  >
                    <PencilIcon className="w-6 h-6 " />
                  </button>
                  <button
                    className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white m-2"
                    name="supprimer"
                    onClick={() => handleDeleteClick(maintenance.id)}
                  >
                    <TrashIcon className="w-6 h-6 " />
                  </button>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between  max-lg:flex-col">
                  <InfoCard
                    iconName={WrenchIcon}
                    title="  Dernière date d'entretien :"
                    content={`${format(
                      new Date(maintenance.last_date_verif),
                      'yyyy-MM-dd'
                    )}`} // Remplacez cette valeur par la valeur réelle que vous souhaitez afficher
                  />

                  <InfoCard
                    iconName={WrenchScrewdriverIcon}
                    title="Km au dernier entretien :"
                    content={`${maintenance.last_km_verif} Km`} // Remplacez cette valeur par la valeur réelle que vous souhaitez afficher
                  />

                  <InfoCard
                    iconName={WrenchScrewdriverIcon}
                    title="Entretien à effectuer tous les :"
                    content={`${maintenance.validity_km} Km ou ${
                      typeof maintenance.validity_period === 'string'
                        ? maintenance.validity_period
                        : `${maintenance.validity_period?.years || 0} mois`
                    }`}
                  />
                </div>

                <div className="flex gap-20 flex-col  pt-10 min-lg:w-3/4 ">
                  <div className="flex items-center px-10 bg-white shadow-xl rounded-2xl ">
                    <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                      <div
                        className="radial-progress text-[var(--color-primary-300)] max-lg:w-[300px]"
                          style={{
                          '--value': '20',
                          '--size': '8rem',
                          '--thickness': '0.6rem',
                        }}
                      >
                        {maintenance.lastKmRemaining} 
                      </div>
                    </div>
                    <p className="ml-10 font-medium text-gray-600 sm:text-xl max-lg:text-sm">
                      Il reste {maintenance.lastKmRemaining} Km avant le
                      prochain entretien. Soit {maintenance.number_of_days_before_next_verif} jours
                    </p>
                  </div>
                  <div className="flex items-center px-10 bg-white shadow-xl rounded-2xl">
                    <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                      <div
                        className="radial-progress text-[var(--color-primary-300)] max-lg:w-[300px]"
                        style={{
                          '--value': '20',
                          '--size': '8rem',
                          '--thickness': '0.6rem',
                        }}
                      >
                        70%
                      </div>
                      <span
                        className="absolute text-2xl text-blue-700"
                        x-text="`${percent}%`"
                      ></span>
                    </div>
                    <p className="ml-10 font-medium text-gray-600 sm:text-xl max-lg:text-sm">
                      Prévoir le prochain entretien pour le: {
                     maintenance.formattedDateNextMaintenance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default EditMaintenanceData;
