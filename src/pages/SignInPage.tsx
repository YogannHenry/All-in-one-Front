import OscillateBackground from "../assets/SvgBackground/OscillateBackground";
import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../store/reducers/user';
import Field from "./LoginField";


function SignInPage() {

  const isLogged = useAppSelector((state) => state.user.logged);
  console.log(isLogged);

  const dispatch = useAppDispatch();


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(login(formData));
  };
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
        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
            
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
  );
}

export default SignInPage;
