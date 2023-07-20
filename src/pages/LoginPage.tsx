import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login, logout } from '../store/reducers/user';
import Field from './LoginField';

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
      {isLogged && (
        <div className="">
          <p className="">{loggedMessage}</p>
          <button
            type="button"
            className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form onSubmit={handleSubmit}>
          <CoilBackground />
          <div className="flex items-center justify-center h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <Field
                    name="email"
                    placeholder="Adresse Email"
                    type="email"
                  />
                  <Field
                    name="password"
                    placeholder="Mot de passe"
                    type="password"
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
                  <button
                    type="submit"
                    className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white"
                  >
                    Se Connecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
