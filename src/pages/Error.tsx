import NavBar from '../components/Partials/NavBar/NavBar';
import Tasse from '../assets/pngegg.png';
import Crayon from '../assets/crayon.png';

function Error() {
  return (
    <>
    

      <div className="h-screen w-screen flex items-center justify-center flex-col bg-slate-50">
        <img src={Tasse} className="w-1/5 absolute right-64" alt="tasse" />
        <img src={Crayon} className="w-1/5  absolute -rotate-45 left-72 top-36" alt="tasse" />
        <div className=" px-32 py-8 flex  justify-center rounded border-8 border-red-500 shadow-lg text-7xl text-red-600">
          <p className="" >404</p>
        </div>

      <div className="pb-40 pt-5 text-red-700">
      Nous sommes désolé, Une erreur s'est produite.

    </div>
      </div>
    </>
  );
}

export default Error;
