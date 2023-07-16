import WalletInputForm from './Form/InputForm';

function TodoLandingPage() {
  const Documents = [
    {
      id: 's1',
      description: 'Santé',
    },
    {
      id: '2',
      description: 'Id',
    },
    {
      id: '3',
      description: 'facture Electroménager',
    },
  ];


  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-base-200">
        <h1 className="text-5xl font-bold pb-3">Wallet</h1>
        <div className="card  w-full max-w-xl shadow-2xl bg-base-100">
          <div className="card-body ">
            <WalletInputForm />

            <div className="card max-md:w-full bg-base-100 shadow-xl">
              {Documents.map((document) => (
                <div
                  key={document.id}
                  id={document.id}
                  className="flex justify-between items-center h-14 p-4 border-b-2 border-white bg-green-100 hover:bg-green-200"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoLandingPage;
