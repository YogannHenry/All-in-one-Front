function FormIncompleteAlert({ onClose }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span className="block sm:inline">
        Remplis les champs et sois le héros du formulaire!
      </span>
      <button
        type="button"
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={onClose}
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            fillRule="evenodd"
            d="M10.293 10l4.147-4.147a1 1 0 011.414 1.414L11.414 11l4.147 4.147a1 1 0 01-1.414 1.414L10 12.414l-4.147 4.147a1 1 0 01-1.414-1.414L8.586 11 4.439 6.853a1 1 0 111.414-1.414L10 9.586l4.147-4.147a1 1 0 111.414 1.414L11.414 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default FormIncompleteAlert;
