import { FormEvent, useState } from 'react'; //FormEvent, c'est un type de données pour typer les form qui contiennent des propriétés comme target, currentTarget, etc.
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../store/reducers/user';
import Field from './LoginField';
import clipartFallout from '../assets/1460481845.svg';
import CoilBackground from '../assets/SvgBackground/CoilBackground';
import { NavLink } from 'react-router-dom';
import ConfirmationMatchUserPassword from '../modals/PasswordConfirmationMatchUserPasswordServer';

function LoginPage() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const loggedMessage = useAppSelector((state) => ` ${state.user.pseudo}`);
  const dispatch = useAppDispatch();

const [PasswordMatchUserPassword, setPasswordMatchUserPassword] =
    useState(false);

    const handleCloseAlert = () => {
     
      setPasswordMatchUserPassword(false);
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if ( isLogged === false) {
      dispatch(login(formData));
      setPasswordMatchUserPassword(true);
      return;
  }};

  return (
    <div>
      {isLogged && (
        <div className="hero max-lg:pt-40 pb-40 bg-base-200 h-screen">
          <form className="hero-content max-md:flex-col max-md:pt-10">
            <div className="max-w-md flex  flex-col items-center text-center ">
              <h1 className="text-5xl textfont-bold flex   flex-col gap-4">
                Content de vous voir
                <span className="text-[var(--color-primary-500)]">
                  {loggedMessage}
                </span>
                sur All-in-One
              </h1>
              <p className="py-6">
                Découvrez dès maintenant toutes les fonctionnalités:
              </p>
              <NavLink to="/" className="btn text-white bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)]">Commencer
                </NavLink>
         
            </div>
            <img
              src={clipartFallout}
              alt="Fallout clipart"
              className="max-md:w-1/2 w-1/3  fill-red-500 stroke-red-500"
            />
          </form>
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
                    {PasswordMatchUserPassword && (
                    <ConfirmationMatchUserPassword onClose={handleCloseAlert} />
                  )}
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
