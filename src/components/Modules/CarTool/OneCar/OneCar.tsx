import Voiture from '../../../../assets/icon-voiture.png';
import EditCarData from './Form/EditCarData';

function OneCar() {
  return (
    <div className="bg-base-200 min-h-screen h-full p-8">
      <h1 className="text-4xl mb-10 text-center">Nom de la voiture</h1>
      <div className="flex justify-center items-center mb-8">
        <figure className="mr-8">
          <img src={Voiture} alt="Icon voiture" className="w-24 h-24" />
        </figure>
        <EditCarData />
      </div>
    </div>
  );
}

export default OneCar;
