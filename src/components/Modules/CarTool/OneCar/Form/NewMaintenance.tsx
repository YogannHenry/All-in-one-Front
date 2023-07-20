function NewMaintenance({ maintenanceData }) {
  return (
    <div className="bg-white shadow p-4 sm:w-1/3 rounded-lg flex flex-col">
      <p className="mb-2 font-semibold">
        Type d'entretien : {maintenanceData.type}
      </p>
      <p className="mb-2 font-semibold">
        Dernier entretien : {maintenanceData.lastMaintenance} KM
      </p>
      <p className="mb-2 font-semibold">
        Entretien à effectuer tous les : {maintenanceData.maintenanceInterval}{' '}
        KM
      </p>
      <p className="mb-2 font-semibold">Date : {maintenanceData.date}</p>
    </div>
  );
}

export default NewMaintenance;
