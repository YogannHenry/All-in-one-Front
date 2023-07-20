import TriangleBlur from '../../../../assets/SvgBackground/TriangleBlur';
import InputDocumentForm from './Form/InputDocumentForm';
import { useState } from 'react';

function WalletDocumentsPage() {
  const [documents, setDocuments] = useState([]);

  // Fonction pour ajouter un nouveau document soumis
  const addDocument = (document) => {
    setDocuments([...documents, document]);
  };

  const deleteDocument = (documentId) => {
    setDocuments(documents.filter((document) => document.id !== documentId));
  };

  console.log(documents);

  return (
    <div>
     <TriangleBlur />
      <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen bg-base-200 z-10  ">
        <h1 className="text-5xl font-bold pb-10">Santé</h1>

        <InputDocumentForm onSubmit={addDocument} />

        <div className="card max-md:w-full w-1/2 bg-base-100 shadow-xl">
          {documents.map((document) => (
            <div
              key={document.id}
              id={document.id}
              className="flex justify-between items-center h-14 px-4 border-b-2 "
            >
              <div className="w-4/6 px-5 border-r-2 ">
                <div className="flex justify-between">
                  <p className="uppercase">{document.name}</p>
                  <p className="text-sm">{document.date}</p>
                </div>
                <p className="text-slate-400 text-sm">{document.description}</p>
              </div>
              <div className="card-actions justify-around">
                <button className="btn bg-[var(--color-primary-300)] text-white">
                  <p>Ouvrir</p>
                </button>
              </div>
              <div className="card-actions justify-around">
                <button className="">
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
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
              </div>
              <div className="card-actions justify-around">
                <button
                  className=""
                  onClick={() => deleteDocument(document.id)}
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WalletDocumentsPage;
