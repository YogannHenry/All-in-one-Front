import todolistImage from '../assets/totolist.png';
import walletImage from '../assets/wallet.png';
import cartool from '../assets/cartool.png';


const dataCarrousel = [
  {
    id: 'Todo-list',
    image: todolistImage,
    description:
      'Grâce à notre outils TodoList, vous serez en mesure de planifier, suivre et accomplir vos tâches de manière plus efficace, vous permettant ainsi de libérer du temps pour les choses qui comptent le plus pour vous.',
  },
  {
    id: 'Portfolio',
    image: walletImage,
    description:
      "Notre outil Wallet facilite l'accès rapide et pratique à vos documents lorsque vous en avez besoin, enlevez-vous le stress de ne plus trouver un document.",
  },
  {
    id: 'Car-Tool',
    image: cartool,
    description:
      "Plus besoin de vous soucier de perdre de vue les échéances d'entretien importantes, notre plateforme vous permet de rester organisé et de planifier efficacement l'entretien de votre véhicule.",
  },
];

function Carrousel() {
  return (
    <div className="flex justify-center max-md:flex-col items-center pt-10 bg-[var(--color-primary-300)] ">
      <div className="flex flex-col py-2 gap-2 px-5">
        {dataCarrousel.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="card w-96 bg-base-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.id}</h2>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="max-md:w-auto w-1/4 h-1/4 pl-5 carousel rounded-box">
        {dataCarrousel.map((item) => (
          <div key={item.id} id={item.id} className="carousel-item w-full">
            <img
              src={item.image}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrousel;

