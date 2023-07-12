
function SignInPage() {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Facilitez-vous la vie, inscrivez-vous!</h1>
      <p className="py-6">Bienvenue dans le monde de la gestion simplifiée de votre quotidien! Vous êtes-vous déjà senti débordé par les tâches, les documents et les rendez-vous qui s'accumulent ?

Ne vous inquiétez plus, notre Web App est là pour vous simplifier la vie !</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mot de passe</span>
          </label>
          <input type="text" placeholder="mot de passe" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-blue-700">Mot de passe oublié?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-300 hover:bg-red-500 text-white">s'inscrire</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default SignInPage;
