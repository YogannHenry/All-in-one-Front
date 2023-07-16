import  { useState } from 'react';
import { FolderIcon, CalculatorIcon, ClipboardDocumentIcon, CreditCardIcon, AcademicCapIcon, GlobeEuropeAfricaIcon, BookOpenIcon, CurrencyEuroIcon, FilmIcon, ShoppingCartIcon, HomeIcon, TruckIcon } from '@heroicons/react/24/solid';

function WalletIconForm() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelection = (iconComponent) => {
    setSelectedIcon(iconComponent);
  };

  return (
    <div className="dropdown dropdown-top max-md:dropdown-end  ">
      <label tabIndex={0} className="btn m-1">
        {selectedIcon ? selectedIcon : 'Icons'}
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[240px] grid grid-cols-4 max-md:grid-cols-2 gap-4">
        <li><a onClick={() => handleIconSelection(<ClipboardDocumentIcon className="h-6 w-6 text-red-700" />)}><ClipboardDocumentIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<FolderIcon className="h-6 w-6 text-red-700" />)}><FolderIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<CalculatorIcon className="h-6 w-6 text-red-700" />)}><CalculatorIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<CreditCardIcon className="h-6 w-6 text-red-700" />)}><CreditCardIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<AcademicCapIcon className="h-6 w-6 text-red-700" />)}><AcademicCapIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<GlobeEuropeAfricaIcon className="h-6 w-6 text-red-700" />)}><GlobeEuropeAfricaIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<BookOpenIcon className="h-6 w-6 text-red-700" />)}><BookOpenIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<CurrencyEuroIcon className="h-6 w-6 text-red-700" />)}><CurrencyEuroIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<FilmIcon className="h-6 w-6 text-red-700" />)}><FilmIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<ShoppingCartIcon className="h-6 w-6 text-red-700" />)}><ShoppingCartIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<HomeIcon className="h-6 w-6 text-red-700" />)}><HomeIcon className="h-6 w-6 text-red-700" /></a></li>
        <li><a onClick={() => handleIconSelection(<TruckIcon className="h-6 w-6 text-red-700" />)}><TruckIcon className="h-6 w-6 text-red-700" /></a></li>
      </ul>
    </div>
  );
}

export default WalletIconForm;
