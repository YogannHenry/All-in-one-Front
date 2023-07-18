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
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[240px] grid grid-cols-4 max-md:grid-cols-2 gap-4 text-[var(--color-primary-500)]">
        <li><a onClick={() => handleIconSelection(<ClipboardDocumentIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><ClipboardDocumentIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<FolderIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><FolderIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<CalculatorIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><CalculatorIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<CreditCardIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><CreditCardIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<AcademicCapIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><AcademicCapIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<GlobeEuropeAfricaIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><GlobeEuropeAfricaIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<BookOpenIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><BookOpenIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<CurrencyEuroIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><CurrencyEuroIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<FilmIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><FilmIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<ShoppingCartIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><ShoppingCartIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<HomeIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><HomeIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
        <li><a onClick={() => handleIconSelection(<TruckIcon className="h-6 w-6 text-[var(--color-primary-500)]" />)}><TruckIcon className="h-6 w-6 text-[var(--color-primary-500)]" /></a></li>
      </ul>
    </div>
  );
}

export default WalletIconForm;
