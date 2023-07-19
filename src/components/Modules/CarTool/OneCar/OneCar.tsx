import Voiture from '../../../../assets/icon-voiture.png';
import CreateMaintenance from './Form/CreateMaintenance';
import EditCarData from './Form/EditCarData';

function OneCar() {
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
        <CreateMaintenance />
      </div>
      <div></div>
    </div>
  );
}

export default OneCar;
