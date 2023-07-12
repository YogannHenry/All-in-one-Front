import NavBar from '../Partials/NavBar/NavBar';

function LoginPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Entrez votre email..."
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Mot de passe"
          className="input input-bordered w-full max-w-xs"
        />
        <a className="btn text-white bg-red-300 hover:bg-red-400">
          Se connecter
        </a>
        <a className="">Vous n’avez pas de compte ? Inscrivez-vous</a>
      </div>
    </div>
  );
}

export default LoginPage;
