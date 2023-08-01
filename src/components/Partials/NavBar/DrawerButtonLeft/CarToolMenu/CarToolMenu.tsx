import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import API_URL from "../../../../API_URL";


function CarToolMenu() {

  const [cars, setCars] = useState([]);
  const userToken = useSelector((state) => state.user.token);

  const getCarsMenu = async () => {
    try {
      const userToken = localStorage.getItem('token');
      console.log(userToken);

      if (userToken) {
        // Ajouter le token à l'en-tête de la requête
        const config = {
          headers: {
            authorization: `${userToken}`,
          },
        };
        console.log(config);

        const response = await axios.get(`${API_URL}/car`, config);
        setCars(response.data);
      } else {
        console.log("Vous n'êtes pas connecté. Le token est manquant.");
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des véhicules:', error);
    }
  };

  useEffect(() => {
    getCarsMenu();
  }, [userToken]);

  return (
    <ul className="flex flex-col items-center">
      <li>
        <a className="font-bold underline uppercase text-base ">Car-Tool</a>
      </li>
      {cars.map((car) => (
      <li key={car.id}>
        <NavLink to={`/Cars/${car.id}`}>
          <a>{car.name}</a>
        </NavLink>
      </li>
      ))}
    </ul>
  );
}

export default CarToolMenu;
