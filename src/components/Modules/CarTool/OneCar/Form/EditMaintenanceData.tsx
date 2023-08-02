import { useState } from 'react';
import { format } from 'date-fns';

export interface EditMaintenanceDataProps {
  id: number;
  name: string;
  last_date_verif: string;
  last_km_verif: number;
  validity_km: number;
  validity_period: string | { years: string; months: string };
  lastKmRemaining: number;
  lastTimeRemaining: string;
}

interface MaintenanceProps {
  maintenances: EditMaintenanceDataProps[];
  deleteMaintenance: (id: number) => void;
  handleUpdateMaintenance: (
    id: number,
    updatedMaintenance: EditMaintenanceDataProps
  ) => void;
}

function EditMaintenanceData({
  maintenances,
  deleteMaintenance,
  handleUpdateMaintenance,
}: MaintenanceProps) {
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
      lastTimeRemaining: '',
    });

  const [timeUnit, setTimeUnit] = useState('years');

  const handleEditClick = (maintenance: EditMaintenanceDataProps) => {
    setEditedMaintenance({ ...maintenance });
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Vérifier si toutes les données nécessaires ont été modifiées et sont valides
    if (
      editedMaintenance.name.trim() &&
      editedMaintenance.last_date_verif &&
      typeof editedMaintenance.validity_km === 'number' &&
      typeof editedMaintenance.last_km_verif === 'number' &&
      editedMaintenance.validity_period
    ) {
      // Formater la date et soumettre le formulaire au parent (API)
      const formattedDate = format(
        new Date(editedMaintenance.last_date_verif),
        'yyyy-MM-dd'
      );

      const editedMaintenanceFormatted = {
        ...editedMaintenance,
        last_date_verif: formattedDate,
        validity_period: `${editedMaintenance.validity_period} ${timeUnit}`,
      };

      handleUpdateMaintenance(editedMaintenance.id, editedMaintenanceFormatted);
      setIsEditing(false);
    } else {
      alert('Veuillez remplir toutes les informations du formulaire.');
    }
  };
  const handleDeleteClick = (maintenanceId: number) => {
    deleteMaintenance(maintenanceId);
  };

  return (
    <div>
      {maintenances.map((maintenance) => (
        <div
          key={maintenance.id}
          className="bg-white shadow p-4 sm:w-1/3 rounded-lg flex flex-col"
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
              {/* Autres champs de saisie pour les autres données de maintenance */}
              {/* ... */}
              <button
                onClick={handleSaveClick}
                className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white mt-4"
              >
                Enregistrer
              </button>
            </div>
          ) : (
            // Afficher les détails de la maintenance si le mode édition n'est pas activé
            <div>
              <p className="mb-2 font-semibold">
                Type d'entretien : {maintenance.name}
              </p>
              <p className="mb-2 font-semibold">
                Dernière date d'entretien :{' '}
                {format(new Date(maintenance.last_date_verif), 'yyyy-MM-dd')}
              </p>
              <p className="mb-2 font-semibold">
                Km au dernier entretien : {maintenance.last_km_verif}
              </p>
              <p className="mb-2 font-semibold">
                Entretien à effectuer tous les : {maintenance.validity_km} KM
              </p>
              <p className="mb-2 font-semibold">
                Entretien à effectuer tous les :{' '}
                {typeof maintenance.validity_period === 'string'
                  ? maintenance.validity_period
                  : `${maintenance.validity_period?.years || 0} années ${
                      maintenance.validity_period?.months || 0
                    } mois`}
              </p>
              <p className="mb-2 font-semibold">
                IL reste {maintenance.lastKmRemaining} Km avant le prochain
                entretien.
              </p>

              <p className="mb-2 font-semibold">
                Le prochain entretien est à la date de :{' '}
                {format(new Date(maintenance.lastTimeRemaining), 'yyyy-MM-dd')}
              </p>
              <button
                className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white ml-2"
                name="modifier"
                onClick={() => handleEditClick(maintenance)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
              <button
                className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white mt-2"
                name="supprimer"
                onClick={() => handleDeleteClick(maintenance.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default EditMaintenanceData;
