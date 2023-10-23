import OscillateBackground from '../assets/SvgBackground/OscillateBackground';
import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login, register } from '../store/reducers/user';
import Field from '../modals/LoginField';
import clipartFallout from '../assets/1460481845.svg';
import PasswordCaractereMissing from '../modals/PasswordCaractereMissing';
import PasswordConfirmationDoNotMatchPassword from '../modals/PasswordConfirmationDoNotMatchPassword';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../API_URL';

function SignInPage() {
  const isRegistered = useAppSelector((state) => state.user.registered);
  console.log('isRegistered', isRegistered);

  const isLogged = useAppSelector((state) => state.user.logged);
  const loggedMessage = useAppSelector((state) => ` ${state.user.pseudo}`);

  const [passwordMissingCaractere, setPasswordMissingCaractere] =
    useState(false);

  const [
    PasswordConfirmationDoNotMatch,
    setPasswordConfirmationDoNotMatchPassword,
  ] = useState(false);

  const dispatch = useAppDispatch();

  const handleCloseAlert = () => {
    setPasswordMissingCaractere(false);
    setPasswordConfirmationDoNotMatchPassword(false);
  };

  const sendConfirmationEmail = async (formData: FormData) => {
    const pseudo = formData.get('pseudo') as string;
    const email = formData.get('email') as string;
    console.log('pseudo, email', pseudo, email);
    try {
      await axios.post(`${API_URL}/emailRegisterConfirmation`, {
        pseudo,
        email,
      });
      console.log(
        'Confirmation email has been sent successfully.',
        pseudo,
        email
      );
    } catch (error) {
      // Handle error here
      console.error('Error sending confirmation email:', error);
    }
  };

  const handleSubmitRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const password = event.currentTarget.password.value;
    const passwordConfirm = event.currentTarget.passwordConfirm.value;

    if (
      password.length < 8 ||
      !password.match(/(?=.*[!@#$%^&*])/) ||
      !password.match(/(?=.*[A-Z])/)
    ) {
      setPasswordMissingCaractere(true);
      setPasswordConfirmationDoNotMatchPassword(false);
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmationDoNotMatchPassword(true);
      setPasswordMissingCaractere(false);
      return;
    }

    // si les deux conditions sont rempli alors on peut envoyer le formulaire
    const formData = new FormData(event.currentTarget);
    dispatch(register(formData));
    sendConfirmationEmail(formData);
    console.log('formDataRegisterForm', formData);
  };

  const handleSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(login(formData));
  };

  return (
    <div className="">
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
      {!isLogged && isRegistered && (
        <form onSubmit={handleSubmitLogin}>
          <div className="flex max-lg:flex-col max-lg:p-5 max-lg:text-center max-lg:pt-40 items-center justify-center h-screen bg-base-200">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold flex flex-col gap-4">
                Vous êtes inscrit! <span>sur All-in-One</span>
              </h1>
              <p className="py-6">
                Connectez-vous dès maintenant pour accéder aux fonctionnalités
                et ainsi vous simplifier la vie !
              </p>
            </div>
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
      {!isRegistered && (
        <div className="  xl:hero min-h-screen bg-base-200 max-md:pt-5 max-md:flex max-md:items-center max-md:justify-center">
          <OscillateBackground />
          <div className="hero-content flex-col lg:flex-row-reverse px-24  lg:w-1/2">
            <form
              onSubmit={handleSubmitRegister}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <Field name="pseudo" placeholder="Pseudo" type="text" />

                  <Field
                    name="email"
                    placeholder="Adresse Email"
                    type="email"
                  />
                </div>
                <div className="form-control">
                  <div
                    className="tooltip  tooltip-left max-md:tooltip-top tooltip-warning"
                    data-tip="Le mot de passe doit avoir au moins 8 caractères, inclure un caractère spécial (!@#$%^&*), et une lettre majuscule."
                  >
                    <Field
                      name="password"
                      placeholder="Mot de passe "
                      type="password"
                    />
                  </div>
                  {passwordMissingCaractere && (
                    <PasswordCaractereMissing onClose={handleCloseAlert} />
                  )}
                  <Field
                    name="passwordConfirm"
                    placeholder="Vérifier votre mot de passe"
                    type="password"
                  />
                  {PasswordConfirmationDoNotMatch && (
                    <PasswordConfirmationDoNotMatchPassword
                      onClose={handleCloseAlert}
                    />
                  )}
                </div>
                <label className="label">
                  <a
                    href="https://all-in-1.fr/login"
                    className="label-text-alt link link-hover text-blue-700"
                  >
                    Déja un compte?
                  </a>
                </label>
                <div className="form-control mt-6">
                  <button className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white">
                    S'inscrire
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignInPage;
