const TodoListData = [
  {
    id: '1',
    Titre: 'css',
    Task: 'page home a faire',
  },
  {
    id: '2',
    Titre: 'Maison',
    Task: 'Faire a manger',
  },
  {
    id: '3',
    Titre: 'Autre',
    Task: 'Passer ascendant sur valo',
  },
];

function TodoList() {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="max-w-full px-4 flex flex-col items-center">
        <p className="text-4xl mb-10">TodoList</p>
        <div className="card w-full bg-base-100 shadow-xl mb-10">
          <div className="flex justify-between">
            <div className="flex flex-grow">
              <input
                type="text"
                placeholder="Ajouter une List"
                className="input input-bordered input-error w-full mr-2"
              />
            </div>
            <button className="btn bg-red-300 hover:bg-red-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
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
        <div className="card max-w-full w-full bg-base-100 shadow-xl">
          <div className="card-body">
            {TodoListData.map((item) => (
              <div className="collapse bg-base-200" key={item.id}>
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  {item.Titre}
                </div>
                <div className="collapse-content">
                  <p>{item.Task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
