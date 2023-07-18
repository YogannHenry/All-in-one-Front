import React, { useState } from 'react';

// ici, onSubmit est une fonction qui sera passée en props depuis le composant parent
function InputDocumentForm({ onSubmit }) {

  // Ici, on utilise le hook useState pour gérer le fichier sélectionné
  const [selectedFile, setSelectedFile] = useState(null);
  // Ici, on utilise le hook useState pour gérer les documents soumis
  const [submittedDocuments, setSubmittedDocuments] = useState([]);
// Ici, on utilise le hook useState pour gérer l'affichage des détails
  const [showDetails, setShowDetails] = useState(false);
// Ici, on utilise le hook useState pour gérer les détails du document
  const [documentDetails, setDocumentDetails] = useState({
    name: '',
    description: '',
    date: '',
  });


  // Fonction pour gérer le changement de fichier
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // ici, setSelectedFile permet de mettre à jour le state avec le fichier sélectionné
    setSelectedFile(file);
    // ici, setShowDetails permet de mettre à jour le state pour afficher les détails grâce à true.
    setShowDetails(true);
  };

  
// Fonction pour gérer le changement des détails du document
  const handleInputChange = (event) => {
    // ici, on récupère le nom et la valeur de l'input
    const { name, value } = event.target;
    // ici, on met à jour le state avec les détails du document, en utilisant le spread operator pour garder les valeurs précédentes
    setDocumentDetails({ ...documentDetails, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // ici, on crée un objet avec les détails du document et le fichier sélectionné
    onSubmit(documentDetails);

    
    setSubmittedDocuments([...submittedDocuments, documentDetails]);

    // Réinitialiser le formulaire
    setSelectedFile(null);
    setShowDetails(false);
    setDocumentDetails({
      name: '',
      description: '',
      date: '',
    });
  };

  return (
    <div>
     
        <div className="pb-10 flex justify-start w-full">
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input border-[var(--color-primary-500)] "
          />
        </div>
     
  

{/* Afficher les détails lorsque le fichier est sélectionné */}
      {showDetails && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2">
            Nom :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={documentDetails.name}
            onChange={handleInputChange}
            className="mb-4"
          />

          <label htmlFor="description" className="block mb-2">
            Description :
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={documentDetails.description}
            onChange={handleInputChange}
            className="mb-4"
          />

          <label htmlFor="date" className="block mb-2">
            Date d'insertion :
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={documentDetails.date}
            onChange={handleInputChange}
            className="mb-4"
          />

          <button type="submit" className="btn bg-blue-500 text-white px-4 py-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}

export default InputDocumentForm;
