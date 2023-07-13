import Carrousel from './Carrousel/Carrousel';

function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <form className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">All-in-One</h1>
            <p className="py-6">
              Bienvenue dans le monde de la gestion simplifiée de votre
              quotidien! Vous êtes-vous déjà senti débordé par les tâches, les
              documents et les rendez-vous qui s'accumulent ? Ne vous inquiétez
              plus, notre Web App est là pour vous simplifier la vie !
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
            <h1 className="mt-20 text-3xl font-bold">
              N'attendez plus et jetez un oeil à nos fonctionnalités
            </h1>
            <div className="flex justify-center mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
        </form>
      </div>
      <Carrousel></Carrousel>
    </div>
  );
}
export default Home;
