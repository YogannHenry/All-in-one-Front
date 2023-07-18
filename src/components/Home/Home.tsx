import Carrousel from './Carrousel/Carrousel';
import { ThemeContext } from '../../contexts/ThemeProvider';

import React, { useContext } from 'react';

interface ThemeProps {
  colorTheme: string;
}

function Home() {
 
  return (
    <div>
      <div className="hero h-5/6 pt-14 bg-base-200 ">
        <form className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">All-in-One</h1>
            <p className="py-6">
              Bienvenue dans le monde de la gestion simplifiée de votre
              quotidien! Vous êtes-vous déjà senti débordé par les tâches, les
              documents et les rendez-vous qui s'accumulent ? Ne vous inquiétez
              plus, notre Web App est là pour vous simplifier la vie !
            </p>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Entrez votre email..."
                className="input input-bordered w-full max-w-xs"
              />
              <a
                className="btn text-white bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)"
              >
                
                s'inscrire
              </a>
            </div>
            <h1 className="mt-20 text-3xl font-bold">
              N'attendez plus et jetez un oeil à nos fonctionnalités
            </h1>
            <div className="flex justify-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`stroke-[var(--color-primary-500)] w-10 h-10`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
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

      <Carrousel></Carrousel>
    </div>
  );
}
export default Home;
