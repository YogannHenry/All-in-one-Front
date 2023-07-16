import  { useState } from 'react';
import { FolderIcon, CalculatorIcon, ClipboardDocumentIcon, CreditCardIcon, AcademicCapIcon, BanknotesIcon, BookOpenIcon, CurrencyEuroIcon, FilmIcon } from '@heroicons/react/24/solid';

function WalletIconForm() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelection = (iconComponent) => {
    setSelectedIcon(iconComponent);
  };

  return (
    <div className="dropdown dropdown-top">
      <label tabIndex={0} className="btn m-1">
        {selectedIcon ? selectedIcon : 'Icons'}
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto">
      <li><a onClick={() => handleIconSelection("Icons")}>Icons</a></li>
     
        <li><a onClick={() => handleIconSelection(<ClipboardDocumentIcon className="h-6 w-6 text-green-500" />)}><ClipboardDocumentIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<FolderIcon className="h-6 w-6 text-green-500" />)}><FolderIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<CalculatorIcon className="h-6 w-6 text-green-500" />)}><CalculatorIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<CreditCardIcon className="h-6 w-6 text-green-500" />)}><CreditCardIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<AcademicCapIcon className="h-6 w-6 text-green-500" />)}><AcademicCapIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<BanknotesIcon className="h-6 w-6 text-green-500" />)}><BanknotesIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<BookOpenIcon className="h-6 w-6 text-green-500" />)}><BookOpenIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<CurrencyEuroIcon className="h-6 w-6 text-green-500" />)}><CurrencyEuroIcon className="h-6 w-6 text-green-500" /></a></li>
        <li><a onClick={() => handleIconSelection(<FilmIcon className="h-6 w-6 text-green-500" />)}><FilmIcon className="h-6 w-6 text-green-500" /></a></li>






      </ul>
    </div>
  );
}

export default WalletIconForm;
