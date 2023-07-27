import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../store/reducers/user';
import Field from './LoginField';
import clipartFallout from '../assets/1460481845.svg';
import CoilBackground from '../assets/SvgBackground/CoilBackground';

function LoginPage() {
  const isLogged = useAppSelector((state) => state.user.logged);

  const loggedMessage = useAppSelector((state) => ` ${state.user.pseudo}`);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(login(formData));
  };
  return (
    <div>
      {isLogged && (
        <div className="hero pb-40 bg-base-200 h-screen">
          <form className="hero-content max-md:flex-col max-md:pt-10">
            <div className="max-w-md flex  flex-col items-center text-center ">
              <h1 className="text-5xl textfont-bold flex   flex-col gap-4">
                Content de te voir
                <span className="text-[var(--color-primary-500)]">
                  {loggedMessage}
                </span>
                sur All-in-One
              </h1>
              <p className="py-6">
                Découvre dès maintenant toutes les fonctionnalités en appuyant
                sur ce bouton présent dans le menu de navigation:
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <img src={clipartFallout} alt='Fallout clipart' className='max-md:w-1/2 w-1/3  fill-red-500 stroke-red-500' />       
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
                  <Field name="pseudo" placeholder="Pseudo" type="text" />
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
