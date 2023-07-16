function TodoLandingPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-base-200">
        <h1 className="text-5xl font-bold pb-3">TodoList</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex">
              <div className="flex-auto">
                <input
                  type="text"
                  placeholder="Ajouter une list"
                  className="input input-bordered"
                />
              </div>
              <div className="flex-auto pl-2">
                <button className="btn bg-red-300 hover:bg-red-500 text-white flex-auto">
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
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">List 1</div>
              <div className="collapse-content">
                <p>-Finir le css</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">List 2</div>
              <div className="collapse-content">
                <p>-Faire a manger</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">List 3</div>
              <div className="collapse-content">
                <p>-Passer ascendant sur valo</p>
                <p>-Passer ascendant sur valo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoLandingPage;
