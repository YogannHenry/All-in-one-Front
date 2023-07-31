import { NavLink } from 'react-router-dom';

function CarToolMenu() {
  return (
    <ul className="flex flex-col items-center">
      <li>
        <a className="font-bold underline uppercase text-base ">Car-Tool</a>
      </li>
      <li>
        <NavLink to="/Cars/CarsId">
          <a>Car 1</a>
        </NavLink>
      </li>
      <li>
        <a>Car 2</a>
      </li>
      <li>
        <a>Car 3</a>
      </li>
    </ul>
  );
}

export default CarToolMenu;
