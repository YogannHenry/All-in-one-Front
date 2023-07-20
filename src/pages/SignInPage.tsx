import OscillateBackground from "../assets/SvgBackground/OscillateBackground";

function SignInPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <OscillateBackground />
      <div className="hero-content flex-col lg:flex-row-reverse px-24 ">
        <div className="px-24 text-center lg:text-left ">
          <h1 className="text-5xl font-bold">
            Facilitez-vous la vie, inscrivez-vous!
          </h1>
          <p className="py-6">
            Bienvenue dans le monde de la gestion simplifiée de votre quotidien!
            Vous êtes-vous déjà senti débordé par les tâches, les documents et
            les rendez-vous qui s'accumulent ? Ne vous inquiétez plus, notre Web
            App est là pour vous simplifier la vie !
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <input
                type="text"
                placeholder="mot de passe"
                className="input input-bordered"
              />
              <label className="label"></label>
              <label className="label">
                <span className="label-text">Vérifiez votre mot de passe</span>
              </label>
              <input
                type="text"
                placeholder="mot de passe"
                className="input input-bordered"
              />
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white">
                s'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
