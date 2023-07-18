import WalletIconForm from './IconForm';

function WalletInputForm() {
  return (
    <div>
      <div className="flex justify-around  items-center pb-5">
        <div className="flex-auto ">
          <input
            type="text"
            placeholder="Ajouter un portefeuille de document"
            className="input input-bordered border-[var(--color-primary-500)] w-full"
          />
        </div>
        <WalletIconForm />
        <div className="pl-2">
          <button className="btn bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-200)] text-white ">
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
