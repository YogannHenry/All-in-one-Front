import logo from '../../../assets/logo.svg';
import LogoTodo from '../../../assets/Todo.jpg';
import Test from '../../../assets/Logo-All-in-One.png';

const dataCarrousel = [
  {
    id: 'slide1',
    image: logo,
    description: 'TEST 1',
  },
  {
    id: 'slide2',
    image: LogoTodo,
    description: 'TEST 2',
  },
  {
    id: 'slide3',
    image: Test,
    description: 'TEST 3',
  },
];

function Carrousel() {
  return (
    <div className="carousel w-full">
      {dataCarrousel.map((item, index) => (
        <div
          key={item.id}
          id={item.id}
          className="carousel-item relative w-full flex items-center"
        >
          <img src={item.image} className="w-1/2" />
          <div className="w-1/2 text-center">
            <p className="my-auto">{item.description}</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 max-md:hidden">
            <a
              href={`#slide${index === 0 ? dataCarrousel.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${
                index === dataCarrousel.length - 1 ? 1 : index + 2
              }`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Carrousel;
