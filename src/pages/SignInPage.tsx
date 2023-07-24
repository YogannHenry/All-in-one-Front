import OscillateBackground from "../assets/SvgBackground/OscillateBackground";
import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login, register } from '../store/reducers/user';
import Field from "./LoginField";


function SignInPage() {

  const isRegistered = useAppSelector((state) => state.user.registered);
  console.log(isRegistered);

  const dispatch = useAppDispatch();


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(register(formData));
  };
  return (
    <div>
 {isRegistered && (
        <div className="hero h-5/6 pb-60 bg-base-200 h-screen">
       
          <form className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl textfont-bold flex flex-col gap-4">
                Bienvenue 
                <span className="text-[var(--color-primary-500)]">
                   {/* {loggedMessage}  */}
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
          </form>
        </div>
      )}
      {!isRegistered && (

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
        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
            <Field
                    name="pseudo"
                    placeholder="pseudo"
                    type="text"
                  />
              <Field
                    name="email"
                    placeholder="Adresse Email"
                    type="email"
                  />
            </div>
            <div className="form-control">
           
              <Field
                    name="password"
                    placeholder="Mot de passe"
                    type="password"
                  />
               <Field
                    name="passwordConfirm"
                    placeholder="Vérifier votre mot de passe"
                    type="password"
                  />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white">
                s'inscrire
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
