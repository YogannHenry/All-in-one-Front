import logo from '../assets/logo.svg';
import LogoTodo from '../assets/Todo.jpg';
import Test from '../assets/Logo-All-in-One.png';
import todolistImage from '../assets/totolist.png';
import walletImage from '../assets/wallet.png';
import cartool from '../assets/cartool.png';

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
    <div
      id="carrousel"
      className="bg-[var(--color-primary-200)] flex justify-center "
    >
      <div className="p-16 w-10/12 max-lg:w-auto ">
        <div className="carousel  mt-10 mx-15 shadow-2xl rounded-3xl bg-base-100">
          {dataCarrousel.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className="carousel-item relative w-full flex max-lg:flex-col  items-center"
            >
              <img src={item.image} className="w-1/2 p-4 rounded-3xl" />
              <div className=" text-center max-lg:">
                <p className="mx-4 px-12 text-2xl  ">{item.description}</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 max-md:hidden">
                <a
                  href={`#slide${index === 0 ? dataCarrousel.length : index}`}
                  className="btn btn-circle bg-[var(--color-primary-500)]"
                >
                  ❮
                </a>
                <a
                  href={`#slide${
                    index === dataCarrousel.length - 1 ? 1 : index + 2
                  }`}
                  className="btn btn-circle bg-[var(--color-primary-500)]"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Carrousel;
