import React, { useState } from 'react';

function InputDocumentForm({ onSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [documentDetails, setDocumentDetails] = useState({
    name: '',
    description: '',
    date: '',
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setShowDetails(true);
  };

  const [submittedDocuments, setSubmittedDocuments] = useState([]);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDocumentDetails({ ...documentDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faire quelque chose avec les détails du document (par exemple, envoyer au serveur)
    console.log('Document détails :', documentDetails);

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
      <div className="flex w-1/2 pb-5">
        <div className="flex-auto w-full">
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input border-[var(--color-primary-500)] w-10/12"
          />
        </div>
        <div className="flex-auto pl-2">
          <button
            type="submit"
            className="btn bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-500)] text-white flex-auto"
            onClick={() => setShowDetails(true)} // Afficher les détails lorsque le bouton est cliqué
          >
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
        </div>
      </div>

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
            Valider
          </button>
        </form>
      )}
    </div>
  );
}

export default InputDocumentForm;
