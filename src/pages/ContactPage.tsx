import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {
  ArrowRightOnRectangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import API_URL from '../API_URL';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      if (!name || !email || !message) {
        setError('Veuillez remplir tous les champs.');
        setSuccess(false);
        return;
      }

      // Envoi des données du formulaire au serveur
      await axios.post(`${API_URL}/contact`, {
        name,
        email,
        message,
      });

      // Réinitialisation du formulaire après l'envoi
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
      setError('');
    } catch (error) {
      setError("Une erreur est survenue lors de l'envoi de l'e-mail.");
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative bg-base-200">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contactez-Nous
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              Vous rencontrez un problème ou vous souhaitez avoir plus
              d'information sur All-in-One
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="card flex-shrink-0 min-w-full max-w-sm shadow-2xl bg-base-100">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nom..."
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[var(--color-primary-400)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary-200)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email..."
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[var(--color-primary-400)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary-200)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Écrivez votre message..."
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[var(--color-primary-400)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary-200)] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      value={message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                {error && (
                  <div className="alert alert-warning text-lg ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                {success && (
                  <div className="alert shadow-lg bg-green-100">
                    <InformationCircleIcon className="h-8 w-8" />{' '}
                    <div>
                      <h3 className="font-bold text-lg">
                        Votre email à bien été envoyé!
                      </h3>
                      <div className="text-lg">
                        Revenir vers la page principale
                      </div>
                    </div>
                    <button className="mr-5 ">
                      <NavLink to="/">
                        <ArrowRightOnRectangleIcon className="h-10 w-10 " />
                      </NavLink>
                    </button>
                  </div>
                )}

                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto btn text-white bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)]"
                    onClick={handleSubmit}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t-4 border-gray-200 text-center">
                <a className="text-indigo-500">
                  Merci d'utiliser un email valide
                </a>
                <p className="leading-normal my-5">place de la république</p>
                <p className="leading-normal my-5">Caen, 14000</p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
