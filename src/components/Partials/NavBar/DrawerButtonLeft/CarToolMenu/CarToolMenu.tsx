import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import API_URL from "../../../../API_URL";
import { RootState } from './../../../../../store/index';

interface Car {
  id: number;
  name: string;
 
}

interface CarsMenuProps {
  cars: Car[];
}

function CarToolMenu({cars}:CarsMenuProps) {

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
