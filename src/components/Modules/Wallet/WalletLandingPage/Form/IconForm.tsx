import { useState } from 'react';
import {
  FolderIcon,
  CalculatorIcon,
  ClipboardDocumentIcon,
  CreditCardIcon,
  AcademicCapIcon,
  GlobeEuropeAfricaIcon,
  BookOpenIcon,
  CurrencyEuroIcon,
  FilmIcon,
  ShoppingCartIcon,
  HomeIcon,
  TruckIcon,
} from '@heroicons/react/24/solid';

function WalletIconForm({ onIconSelection, selectedIcon, setSelectedIcon }) {
  const handleIconSelection = (iconComponent) => {
    setSelectedIcon(iconComponent);
    onIconSelection(iconComponent);

    console.log('handleIconSelection', handleIconSelection);
    console.log('onIconSelection', onIconSelection);
  };

  const Icons = [
    FolderIcon,
    CalculatorIcon,
    ClipboardDocumentIcon,
    CreditCardIcon,
    AcademicCapIcon,
    GlobeEuropeAfricaIcon,
    BookOpenIcon,
    CurrencyEuroIcon,
    FilmIcon,
    ShoppingCartIcon,
    HomeIcon,
    TruckIcon,
  ];

  return (
    <form className="dropdown dropdown-top max-md:dropdown-end  ">
      <label tabIndex={0} className="btn m-1">
        {selectedIcon ? selectedIcon : 'Icons'}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[240px] grid grid-cols-4 max-md:grid-cols-2 gap-4 text-[var(--color-primary-500)]"
      >
        {Icons.map((Icon) => (
          <li key={Icon.name}>
            <a
              onClick={() => {
                const iconName = Icon.displayName; // Get the display name of the icon
                handleIconSelection(iconName);
              }}
            >
              <Icon className="h-6 w-6 text-[var(--color-primary-500)]" />
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default WalletIconForm;
