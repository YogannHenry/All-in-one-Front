import React, { useState } from 'react';
import Voiture from '../../../../assets/icon-voiture.png';

function OneCar() {
  // État pour les données du véhicule
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
    // Ici, tu peux effectuer une action pour enregistrer les modifications si nécessaire
  };

  return (
    <div className="bg-base-200 min-h-screen h-full">
      <div className="pt-8">
        <h1 className="text-4xl mb-10 flex justify-center">
          Nom de la voiture
        </h1>
      </div>
      <div className="flex  justify-between items-center">
        <figure className="mr-8">
          <img src={Voiture} alt="Icon voiture" />
        </figure>
        <div>
          {isEditing ? (
            <div>
              <label>
                Modèle:
                <input
                  type="text"
                  value={carData.Modele}
                  onChange={(e) =>
                    setCarData({ ...carData, Modele: e.target.value })
                  }
                />
              </label>
              <label>
                Km par mois:
                <input
                  type="text"
                  value={carData.KmMois}
                  onChange={(e) =>
                    setCarData({ ...carData, KmMois: e.target.value })
                  }
                />
              </label>
              <label>
                Type de véhicule:
                <input
                  type="text"
                  value={carData.TypeVehicules}
                  onChange={(e) =>
                    setCarData({ ...carData, TypeVehicules: e.target.value })
                  }
                />
              </label>
              <label>
                Km actuel:
                <input
                  type="text"
                  value={carData.KmActuel}
                  onChange={(e) =>
                    setCarData({ ...carData, KmActuel: e.target.value })
                  }
                />
              </label>
              <button onClick={handleSaveClick}>Enregistrer</button>
            </div>
          ) : (
            <div>
              <p>Modèle: {carData.Modele}</p>
              <p>Km par mois: {carData.KmMois}</p>
              <p>Type de véhicule: {carData.TypeVehicules}</p>
              <p>Km actuel: {carData.KmActuel}</p>
              <button onClick={handleEditClick}>Modifier</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OneCar;
