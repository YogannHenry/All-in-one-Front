import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Voiture from '../../../../assets/icon-voiture.png';

import CarsForm from './Form/Form';

function CarsList() {
  const [cars, setCars] = useState([]);

  const handleAddCar = (newCar) => {
    const newCarWithId = {
      ...newCar,
      id: Date.now().toString(),
    };
    setCars([...cars, newCarWithId]);
  };

  return (
    <div className="bg-base-200  min-h-screen h-full">
      <div className="pt-8">
        <h1 className="text-4xl mb-10 flex justify-center">CarTool</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {cars.map((car) => (
          <NavLink
            to={`/cars/${car.id}`}
            className="card w-full sm:w-96 bg-base-100 shadow-xl my-4 mx-2"
            key={car.id}
          >
            <figure>
              <img src={Voiture} alt="Icon voiture" />
            </figure>
            <div className="card-body flex items-center">
              <div className="flex-grow" />
              <h2 className="card-title">{car.modele}</h2>
              <button className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white ml-2">
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
          </NavLink>
        ))}
      </div>
      <CarsForm onAddCar={handleAddCar} />
    </div>
  );
}
export default CarsList;
