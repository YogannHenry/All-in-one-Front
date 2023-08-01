import axios from 'axios';
import TriangleBlur from '../../../../assets/SvgBackground/TriangleBlur';
import API_URL from '../../../API_URL';
import InputDocumentForm from './Form/InputDocumentForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { XMarkIcon } from '@heroicons/react/24/solid';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function WalletDocumentsPage() {
  const { walletId } = useParams();
  const [documents, setDocuments] = useState([]);
  // Ici, on utilise le hook useState pour gérer les documents soumis
  const [submittedDocuments, setSubmittedDocuments] = useState([]);
  // const [previewDocument, setPreviewDocument] = useState(false);
  // const [currentDocumentId, setCurrentDocumentId] = useState(null);
  const [pdfFile, setPdfFile] = useState({});
  const [wallet, setWallet] = useState([]);

  const getOneWallet = async () => {
    const { data } = await axios.get(`${API_URL}/wallet/${walletId}`);
    setWallet(data);
  };
  const getDocuments = async () => {
    const { data } = await axios.get(`${API_URL}/wallet/${walletId}/document`);
    setDocuments(data);
  };
  const addDocument = async (newDocument, documentDetails) => {
    try {
      console.log('newDocument:', newDocument);
      console.log('newDocument:', newDocument);
      const formData = new FormData();
      formData.append('uploaded_file', newDocument);
      formData.append('name', documentDetails.name);
      formData.append('information', documentDetails.information);

      const { data } = await axios.post(
        `${API_URL}/wallet/${walletId}/document`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Mettre à jour l'état des Documents avec le nouveau Document ajouté
      setDocuments((prevDocuments) => [...prevDocuments, data]);
      getDocuments();
    } catch (error) {
      console.error('Erreur lors de la création du document :', error);
    }
  };
  const deleteDocument = async (documentId: number) => {
    const { data } = await axios.delete(
      `${API_URL}/wallet/document/${documentId}`
    );
    setDocuments(documents.filter((document) => document.id !== documentId));
  };

  // Add this state variable
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const closePreview = () => {
    setIsPreviewOpen(false);
    setPdfFile({});
  };

  const previewFile = async (documentId: number) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/wallet/document/${documentId}`
      );
      const type = data[0].type;
      if (type.startsWith('image/')) {
        const imageFileImport = await import(
          `../../../../../uploads/${data[0].file}`
        );
        const pdfFile = imageFileImport.default;
        setPdfFile((prevPdfFiles) => ({
          ...prevPdfFiles,
          [documentId]: pdfFile,
        }));
      } else if (type === 'application/pdf') {
        const pdfFileImport = await import(
          `../../../../../uploads/${data[0].file}`
        );
        const pdfFile = pdfFileImport.default;
        setPdfFile((prevPdfFiles) => ({
          ...prevPdfFiles,
          [documentId]: pdfFile,
        }));
        // setCurrentDocumentId(documentId);
        // setPreviewDocument(true);
        setIsPreviewOpen(true);
      } else {
        console.error('Type de fichier non pris en charge :', type);
        return;
      }
    } catch (error) {
      console.error('Erreur lors du chargement du fichier :', error);
    }
  };

  const downloadFile = async (documentId: number) => {
    try {
      const response = await axios.get(
        `${API_URL}/wallet/document/${documentId}/download`,
        {
          responseType: 'blob',
        }
      );

      const { data } = await axios.get(
        `${API_URL}/wallet/document/${documentId}`
      );
      const fileName = data[0].name;
      const type = data[0].type;

      const url = window.URL.createObjectURL(new Blob([response.data]));
      console.log('url:', url);
      const link = document.createElement('a');
      console.log(link);
      link.href = url;

      const fileExtension = `${fileName}.${type}`;
      link.setAttribute('download', fileExtension);
      console.log(link);

      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error while downloading the document:', error);
    }
  };

  useEffect(() => {
    getDocuments();
    getOneWallet();

  }, []);

  const walletName = wallet.map((wallet) => wallet.name);

  return (
    <div className="bg-base-200 h-full">
      <TriangleBlur />
      <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen bg-base-200 z-10  ">
        <h1 className="text-5xl font-bold pb-10">{walletName}</h1>

        <InputDocumentForm
          onSubmit={addDocument}
          documentInformationFromInput={setSubmittedDocuments}
        />

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
                <p className="text-slate-400 text-sm">{document.information}</p>
              </div>

              <div className="card-actions justify-around">
                {!isPreviewOpen && (
                  <button className="btn bg-[var(--color-primary-300)] text-white">
                    <p onClick={() => previewFile(document.id)}>Ouvrir</p>
                  </button>
                )}
                {isPreviewOpen &&
                  pdfFile[document.id] &&
                  !pdfFile[document.id].endsWith('.pdf') && (
                    <div>
                      <img
                        src={pdfFile[document.id]}
                        alt={`Document ${document.name}`}
                      />
                    </div>
                  )}
                {pdfFile[document.id] &&
                  pdfFile[document.id].endsWith('.pdf') && (
                    <div className="w-screen h-screen fixed left-0 top-0 flex justify-center bg-slate-50 overflow-scroll ">
                      <div className=' absolute mt-40 '>
                      <Document file={pdfFile[document.id]}>
                        <Page pageNumber={1} />
                      </Document>
                      <button
                        className="border rounded-lg bg-[var(--color-primary-500)] absolute top-2 right-2 z-50 text-white"
                        onClick={closePreview}
                      >
                        <XMarkIcon className="w-8 h-8 text-white stroke-2 " />
                      </button>
                      </div>
                    </div>
                  )}
              </div>
              <div className="card-actions justify-around">
                <button className="" onClick={() => downloadFile(document.id)}>
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
