import Carrousel from './Carrousel/Carrousel';

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center border-t-4 pt-2">
        <form className="">
          <h1 className="text-center	">All-in-One</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing Lorem
            Ipsum is simply dummy te printing and typesetting industry. Lorem
            and typesetting industry
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Entrez votre email..."
              className="input input-bordered w-full max-w-xs"
            />
            <a className="btn text-white bg-red-300 hover:bg-red-400">
              s'inscrire
            </a>
          </div>
        </form>
      </div>
      <Carrousel></Carrousel>
    </div>
  );
}
export default Home;
