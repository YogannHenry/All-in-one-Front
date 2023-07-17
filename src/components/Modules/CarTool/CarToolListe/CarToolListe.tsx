import Voiture from '../../../../assets/icon-voiture.png';

const CarsData = [
  {
    id: '1',
    Modele: 'BMW Série 3',
    KmMoyenMois: '1200',
    TypeVehicules: 'Voiture',
    KmActuel: '126000',
  },
  {
    id: '2',
    Modele: 'BMW Série 1',
    KmMoyenMois: '566',
    TypeVehicules: 'Voiture',
    KmActuel: '5000',
  },
  {
    id: '3',
    Modele: 'Porsche GT2 RS',
    KmMoyenMois: '200',
    TypeVehicules: 'Voiture',
    KmActuel: '800',
  },
];

function CarsList() {
  return (
    <div className="bg-base-200 h-screen">
      <div>
        <h1 className="text-4xl mb-10 flex justify-center">CarTool</h1>
      </div>
      <div className="flex justify-center">
        {CarsData.map((car) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={car.id}>
            <figure>
              <img src={Voiture} alt="Icon voiture" />
            </figure>
            <div className="card-body flex items-center">
              <div className="flex-grow" />
              <h2 className="card-title">{car.Modele}</h2>
              <button className="btn bg-red-300 hover:bg-red-500 text-white ml-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsList;
