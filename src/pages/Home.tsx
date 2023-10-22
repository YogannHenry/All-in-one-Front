import { useAppSelector } from '../hooks/redux';
import AlternativeCarrousel from '../modals/AlternativeCarrousel';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Partials/Footer/Footer';
import flecheMenuGauche from '../assets/flecheMenuGauche.png';
import flecheMenuDroite from '../assets/flecheMenuDroite.png';
import { PencilSquareIcon, WalletIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

function Home() {
  const isLogged = useAppSelector((state) => state.user.logged);

  const handleScrollToCarrousel = () => {
    const carrouselElement = document.getElementById('carrousel');
    if (carrouselElement) {
      carrouselElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {isLogged && (
        <div className="bg-base-200 px-4">
          <img
            className="absolute w-1/4 max-md:hidden"
            src={flecheMenuGauche}
            alt="flecheMenuGauche "
          />
          <img
            className="absolute right-0 w-1/4 max-md:hidden"
            src={flecheMenuDroite}
            alt="flecheMenuDroite"
          />

          <p className=" h-auto flex items-center text-center flex-col  pt-10 text-2xl text-slate-800 font-sans">
            <span className="text-4xl font-bold mb-2">Libérer du temps!</span>{' '}
            pour les choses qui comptent le plus pour vous
          </p>
          <div className="flex justify-center">
            <div className=" flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl ">
              <div className=" bg-gradient-to-t from-[var(--color-primary-300)] via-[var(--color-primary-500)] to-[var(--color-primary-700)] border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5  w-[320px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
                <NavLink to="/list">
                  <div className="flex flex-col justify-center items-center text-white p-2 ">
                    <div className="bg-gradient-to-t from-gray-900 via-[var(--color-primary-500)]  to-[var(--color-primary-300)]  rounded-full p-2">
                      <PencilSquareIcon className="h-10 w-10" />
                    </div>

                    <div className="text-white text-sm my-2 flex flex-col items-center font-medium md:tracking-tighter">
                      <div className="pt-5 text-3xl md:text-5xl">TodoList</div>
                      <ul className="pt-10 text-2xl md:text-xl text-center pb-6 leading-10">
                        <ol className="pb-2">Créez vos listes</ol>
                        <ol>
                          Prévisualisez les tâches en cours en cliquant dessus
                        </ol>
                        <ol className="pb-2">Créez vos tâches</ol>
                        <ol className="pb-2">Modifiez</ol>
                        <ol className="pb-2">Filtrez</ol>
                        <ol className="pb-2">Supprimez</ol>
                      </ul>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="bg-gradient-to-bl from-[var(--color-primary-700)] via-[var(--color-primary-500)] to-[var(--color-primary-700)] border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[320px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
                <NavLink to="/wallet">
                  <div className="flex flex-col justify-center items-center text-white p-2 ">
                    <div className="bg-gradient-to-bl from-slate-900 via-[var(--color-primary-500)] to-slate-900 rounded-full p-2">
                      <WalletIcon className="h-10 w-10" />
                    </div>
                    <div className="text-white text-sm my-2 flex flex-col items-center font-medium md:tracking-tighter">
                      <div className="pt-5 text-3xl md:text-5xl">PortFolio</div>
                      <ul className="pt-10 text-2xl md:text-xl text-center pb-6 leading-10">
                        <ol className="pb-2">Créez vos portfolios</ol>
                        <ol className="pb-2">Classez vos documents</ol>
                        <ol className="pb-2">
                          Importez ou prenez vos documents en photos
                        </ol>
                        <ol className="pb-2">
                          Accèdez à vos documents dès que vous en avez besoin
                        </ol>
                        <ol className="pb-2">Prévisualisez</ol>
                        <ol className="pb-2">Téléchargez</ol>
                      </ul>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="bg-gradient-to-t from-[var(--color-primary-700)] via-[var(--color-primary-500)] to-[var(--color-primary-300)] border border-gray-200 rounded-xl drop-shadow-xd shadow-current p-5 h-auto w-[320px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
                <NavLink to="/cars">
                  <div className="flex flex-col justify-center items-center text-white p-2 ">
                    <div className="bg-gradient-to-t  from-[var(--color-primary-700)] via-[var(--color-primary-500)] to-[var(--color-primary-300)] rounded-full p-2">
                      <svg
                        className="h-10 w-10  fill-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                      </svg>
                    </div>
                    <div className="text-white text-sm my-2 flex flex-col items-center  font-medium md:tracking-tighter">
                      <div className="pt-5 text-3xl md:text-5xl">CarTool</div>
                      <ul className="pt-10 text-2xl md:text-xl text-center pb-6 leading-10">
                        <ol className="pb-2">Créez un véhicule</ol>
                        <ol className="pb-2">Crééz vos maintenances</ol>
                        <ol className="pb-2">
                          Obtenez automatiquement la date prévisionnel de vos
                          maintenances
                        </ol>
                        <ol className="pb-2">
                          Gérez le suivi de votre véhicule
                        </ol>
                      </ul>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className=' border border-gray-700 rounded-xl drop-shadow-xd shadow-current p-5 m-10 h-auto w-fit '>
            <h3>Journal d'activité:</h3>
            <ul>
              <ol>- 09/10/2023 Css Responsives todo-list et tâches, réparer la fonctionnalité de téléchargement du document, changement mineur Css</ol>
              <ol>- 10/10/2023 Preview image fonctionnelle sur l'hébergeur. Modification du module WalletDocument suppression fonction previexFile creation fonction openImage. Reste à rêgler l'affichage des pdf</ol>
              <ol>17/10/2023 Css carTool work on progress + création composant InfoCard factorisation du code</ol>
            </ul>
          </div>

        </div>
      )}
      {!isLogged && (
        <>
          <div className="hero h-5/6 pt-14 bg-base-200  ">
            <form className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">All-in-One</h1>
                <p className="py-6 text-lg">
                  Bienvenue dans le monde de la gestion simplifiée de votre
                  quotidien! Vous êtes-vous déjà senti débordé par les tâches,
                  les documents et les rendez-vous qui s'accumulent ? Ne vous
                  inquiétez plus, notre Web App est là pour vous simplifier la
                  vie !
                </p>
                <div className="flex justify-center items-center">
               
                  <a className="btn text-lg mt-10 lowercase text-white bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)]">
                    <NavLink to="/signin">inscrivez-vous c'est gratuit</NavLink>
                  </a>
                </div>
                <h1 className="mt-10 text-3xl font-bold">
                  N'attendez plus et jetez un oeil à nos fonctionnalités
                </h1>
                <div className="flex justify-center mt-5">
              <ChevronDoubleDownIcon 
               onClick={handleScrollToCarrousel}
               className="w-8 h-8" />
                </div>
              </div>
            </form>
          </div>
          <svg
            className="fill-[var(--color-primary-300)] bg-base-200 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
          <AlternativeCarrousel></AlternativeCarrousel>
          <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                className="fill-[var(--color-primary-300)]"
                fill="none"
                fill-opacity="1"
                d="M0,128L60,106.7C120,85,240,43,360,42.7C480,43,600,85,720,122.7C840,160,960,192,1080,170.7C1200,149,1320,75,1380,37.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
export default Home;
