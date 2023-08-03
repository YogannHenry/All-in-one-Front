import { ArrowUturnLeftIcon, CameraIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// ici, onSubmit est une fonction qui sera passée en props depuis le composant parent
function InputDocumentForm({ onSubmit }) {
  // Ici, on utilise le hook useState pour gérer le fichier sélectionné
  const [selectedFile, setSelectedFile] = useState(null);

  // Ici, on utilise le hook useState pour gérer l'affichage des détails de façon interactive
  const [showDetails, setShowDetails] = useState(false);
  // Ici, on utilise le hook useState pour gérer les détails du document
  const [documentDetails, setDocumentDetails] = useState({
    name: '',
    information: '',
    date: '',
  });

  // Fonction pour gérer l'apparition du menu lors de lq selection d'un fichier
  const handleFileChange = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    // ici, setSelectedFile permet de mettre à jour le state avec le fichier sélectionné
    setSelectedFile(file);
    // ici, setShowDetails permet de mettre à jour le state pour afficher les détails grâce à true.
    setShowDetails(true);
  };

  // Fonction pour gérer le changement des détails du document
  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    // ici, on récupère le nom et la valeur de l'input
    const { name, value } = event.target;
    // ici, on met à jour le state avec les détails du document, en utilisant le spread operator pour garder les valeurs précédentes
    setDocumentDetails({ ...documentDetails, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // ici, on crée un objet avec les détails du document et le fichier sélectionné
    onSubmit(selectedFile, documentDetails);

    console.log('documentDetails', documentDetails);

    // Réinitialiser le formulaire
    setSelectedFile(null);
    setShowDetails(false);
    setDocumentDetails({
      name: '',
      information: '',
      date: '',
    });
  };

  return (
    <div className="flex flex-col relative">
      <div>
        <div className="flex justify-between">
          <NavLink
            to="/wallet"
            className="btn bg-[var(--color-primary-300)] max-lg:w-16 mr-10 mb-2"
          >
            <ArrowUturnLeftIcon className="h-10 w-10 text-white" />
          </NavLink>
          <label className="btn bg-[var(--color-primary-300)] max-lg:w-16 mr-10 mb-2 lg:hidden">
            <input
              className="hidden"
              type="file"
              name="image"
              accept="image/*"
              capture="environment"
            />
            <CameraIcon className="h-10 w-10 text-white" />
          </label>
        </div>
        <div className="pb-10 flex justify-start w-full">
          <input
            type="file"
            // ici, on utilise onChange pour gérer le changement de fichier
            onChange={handleFileChange}
            className="file-input border-[var(--color-primary-500)] "
          />
        </div>
      </div>

      {/* Afficher les détails lorsque le fichier est sélectionné */}
      {showDetails && (
        <form className="  mb-5" onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2">
            Nom :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={documentDetails.name}
            onChange={handleInputChange}
            className="input input-bordered input-sm w-full max-w-xs"
          />

          <label htmlFor="description" className="block">
            Description :
          </label>
          <input
            type="text"
            id="information"
            name="information"
            value={documentDetails.information}
            onChange={handleInputChange}
            className="input input-bordered input-sm w-full max-w-xs"
          />

          <label htmlFor="date" className="block ">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={documentDetails.date}
            onChange={handleInputChange}
            className="input input-bordered input-sm max-w-xs"
          />

          <button
            type="submit"
            className="btn bg-[var(--color-primary-300)] ml-5  text-white px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}

export default InputDocumentForm;
