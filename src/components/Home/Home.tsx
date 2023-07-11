import Carrousel from './Carrousel/Carrousel';

function Home() {
  return (
    <div>
      <form>
        <h1>All-in-One</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
          is simply dummy te printing and typesetting industry. Lorem and
          typesetting industry
        </p>
        <input
          type="text"
          placeholder="Entrez votre email..."
          className="input input-bordered w-full max-w-xs"
        />
        <a className="btn text-white bg-red-300 hover:bg-red-400">s'inscrire</a>
        <Carrousel></Carrousel>
      </form>
    </div>
  );
}
export default Home;
