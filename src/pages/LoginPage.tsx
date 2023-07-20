import { FormEvent, MouseEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login, logout } from '../store/reducers/user';

import CoilBackground from '../assets/SvgBackground/CoilBackground';

function LoginPage() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const loggedMessage = useAppSelector(
    (state) => `Bienvenue ${state.user.pseudo}`
  );

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(login(formData));
  };
  return (
    <div>
      {!isLogged && (
        <div>
          <CoilBackground />
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
                  <button className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white">
                    Se Connecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">{loggedMessage}</p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
