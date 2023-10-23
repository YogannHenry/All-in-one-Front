import { FormEvent, useState } from 'react'; //FormEvent, c'est un type de données pour typer les form qui contiennent des propriétés comme target, currentTarget, etc.
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../store/reducers/user';
import Field from '../modals/LoginField';
import clipartFallout from '../assets/1460481845.svg';
import CoilBackground from '../assets/SvgBackground/CoilBackground';
import { NavLink } from 'react-router-dom';
import ConfirmationMatchUserPassword from '../modals/PasswordConfirmationMatchUserPasswordServer';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

function LoginPageWithFlip() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const loggedMessage = useAppSelector((state) => ` ${state.user.pseudo}`);
  const dispatch = useAppDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [PasswordMatchUserPassword, setPasswordMatchUserPassword] =
    useState(false);

  const handleCloseAlert = () => {
    setPasswordMatchUserPassword(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (isLogged === false) {
      dispatch(login(formData));
      setPasswordMatchUserPassword(true);
      return;
    }
  };

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
              <NavLink
                to="/"
                className="btn text-white bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)]"
              >
                Commencer
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
          <div className="flex items-center justify-center h-screen bg-base-200">
            <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 absolute backface-hidden border-2">
                  <div className="card-body">
                    <div className="form-control">
                      <Field
                        name="email"
                        placeholder="Adresse Email"
                        type="email"
                      />
                      <div className="flex items-end">
                        <Field
                          name="password"
                          placeholder="Mot de passe"
                          type={passwordVisible ? 'text' : 'password'}
                        />
                        <label className="swap pb-2 pl-2">
                          <input
                            type="checkbox"
                            onChange={togglePasswordVisibility}
                            checked={passwordVisible}
                          />
                          {passwordVisible ? (
                            <EyeSlashIcon className="w-8 h-8 " />
                          ) : (
                            <EyeIcon className="w-8 h-8 " />
                          )}
                        </label>
                      </div>

                      {PasswordMatchUserPassword && (
                        <ConfirmationMatchUserPassword
                          onClose={handleCloseAlert}
                        />
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
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                    <h1 className="text-3xl font-semibold">The King's Man</h1>
                    <p className="my-2">9.0 Rating</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis itaque assumenda saepe animi maxime libero non
                      quasi, odit natus veritatis enim culpa nam inventore
                      doloribus quidem temporibus amet velit accusamus.
                    </p>
                    <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginPageWithFlip;
