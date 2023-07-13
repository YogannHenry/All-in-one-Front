function LoginPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-base-200">
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
                placeholder="Mot de passe"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-blue-700"
                >
                  Mot de passe oublié?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-300 hover:bg-red-500 text-white">
                Se Connecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
