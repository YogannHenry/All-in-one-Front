import logo from '../assets/logo.svg';
import LogoTodo from '../assets/Todo.jpg';
import Test from '../assets/Logo-All-in-One.png';
import todolistImage from '../assets/totolist.png';
import walletImage from '../assets/wallet.png';

const dataCarrousel = [
  {
    id: 'slide1',
    image: todolistImage,
    description: 'Grâce à notre outils TodoList, vous serez en mesure de planifier, suivre et accomplir vos tâches de manière plus efficace, vous permettant ainsi de libérer du temps pour les choses qui comptent le plus pour vous. Dites adieu aux listes de tâches désorganisées et découvrez comment notre outil peut transformer votre façon de travailler et de vivre au quotidien.',
  },
  {
    id: 'slide2',
    image: walletImage,
    description: 'Notre outil Wallet facilite l\'accès rapide et pratique à vos documents lorsque vous en avez besoin, enlevez-vous le stress de ne plus trouver un document quand vous en avez-besoin. Découvrez comment notre plateforme peut vous aider à garder vos documents et y accéder en toute simplicité.',
  },
  {
    id: 'slide3',
    image: Test,
    description: 'TEST 3',
  },
];

function Carrousel() {

  return (
    <div id="carrousel" className="bg-[var(--color-primary-200)] flex justify-center">
    <div className="p-16 w-10/12 ">
      <div className="carousel  mt-10 mx-15 shadow-2xl rounded-3xl bg-base-100">
        {dataCarrousel.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className="carousel-item relative w-full flex items-center"
          >
            <img src={item.image} className="w-1/2 mx-4 rounded-3xl" />
            <div className=" text-center">
              <p className="mx-4 px-12 text-2xl">{item.description}</p>
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
