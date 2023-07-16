
const Documents = [
  {
    id: 's1',
    description: 'mutuel Bob l\'éponge',
  },
  {
    id: '2',
    description: 'carte vitale Bob l\'éponge',
  },
  {
    id: '3',
    description: 'facture Big John taille XXl',
  },
];

function WalletLandingPage() {
  
  return (
    <div>
      <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen bg-base-200">
        <p className="text-4xl mb-10">Nom de la liste</p>
        <div className="card max-md:w-full  w-1/2 bg-base-100 shadow-xl mb-10">
          <input
            type="text"
            placeholder="Ajouter une tâche"
            className="input input-bordered input-error w-full "
          />
        </div>

        <div className="card max-md:w-full w-1/2 bg-base-100 shadow-xl">
          {Documents.map((document) => (
            <div
              key={document.id}
              id={document.id}
              className="flex justify-between items-center h-14 px-4 border-b-2"
            >
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    // checked="checked"
                    className="checkbox checkbox-error"
                  />
                </label>
              </div>
              <div className="w-full pl-5">
                <p>{document.description}</p>
              </div>
              <div className="card-actions justify-around opacity-0 hover:opacity-100">
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between px-5 h-14 text-xs text-slate-500">
            <span>X taches en cours</span>
            <div className="flex justify-around ">
              <span className="px-2">Tàches</span>
              <span className="px-2">Actives</span>
              <span className="px-2">Terminées</span>
            </div>
            <span className="clear">Nettoyer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletLandingPage;
