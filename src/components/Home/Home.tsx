import logo from '../../assets/logo.svg';



const dataCarrousel = [
  {
    id: 'slide1',
    image: logo,
    description: 'TEST 1',
  },
  {
    id: 'slide2',
    image: logoTodo,
    description: 'TEST 2',
  },
];

function Home() {
  return (
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full flex items-center"
        >
          <img src={logo} className="w-1/2" />
          <div className="w-1/2 text-center">
            <p className="my-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
