function WalletInputForm() {


  return (
    <div>
 
            <div className="flex justify-around pb-5">
              <div className="flex-auto ">
                <input
                  type="text"
                  placeholder="Ajouter un portefeuille de document"
                  className="input input-bordered input-error w-full"
                />
              </div>
              <div className="pl-2">
                <button className="btn bg-red-300 hover:bg-red-500 text-white ">
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
              </div>
            </div>

           
    </div>
  );
}

export default WalletInputForm;
