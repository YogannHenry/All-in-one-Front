import todolistImage from '../assets/totolist.png';
import walletImage from '../assets/wallet.png';
import cartool from '../assets/cartool.png';
import wave from '../assets/wave.haikei.svg'

const dataCarrousel = [
  {
    id: 'slide1',
    image: todolistImage,
    description:
      'Grâce à notre outils TodoList, vous serez en mesure de planifier, suivre et accomplir vos tâches de manière plus efficace, vous permettant ainsi de libérer du temps pour les choses qui comptent le plus pour vous.',
  },
  {
    id: 'slide2',
    image: walletImage,
    description:
      "Notre outil Wallet facilite l'accès rapide et pratique à vos documents lorsque vous en avez besoin, enlevez-vous le stress de ne plus trouver un document.",
  },
  {
    id: 'slide3',
    image: cartool,
    description:
      "Plus besoin de vous soucier de perdre de vue les échéances d'entretien importantes, notre plateforme vous permet de rester organisé et de planifier efficacement l'entretien de votre véhicule.",
  },
];

function Carrousel() {
  return (

    <div className="flex justify-center w-full pt-10">
<div className="flex flex-col py-2 gap-2 px-5">
        <a href="#item1" className="card w-96 bg-base-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Todo-List</h2>
            <p>Grâce à notre outils TodoList, vous serez en mesure de planifier, suivre et accomplir vos tâches de manière plus efficace, vous permettant ainsi de libérer du temps pour les choses qui comptent le plus</p>
          </div>
        </a>
        <a href="#item2" className="card w-96 bg-base-100   shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Portfolio</h2>
            <p>Notre outil Wallet facilite l'accès rapide et pratique à vos documents lorsque vous en avez besoin, enlevez-vous le stress de ne plus trouver un document.</p>
          </div>
        </a>
        <a href="#item3" className="card w-96 bg-base-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Cartool</h2>
            <p>Plus besoin de vous soucier de perdre de vue les échéances d'entretien importantes, notre plateforme vous permet de rester organisé et de planifier efficacement l'entretien de votre véhicule.</p>
          </div>
        </a>
      </div>
      <div className="w-1/4 carousel rounded-box">
        <div id="item1" className="carousel-item w-full">
          <img
            src={todolistImage}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={walletImage}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={cartool}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </div>
  );
}
export default Carrousel;
