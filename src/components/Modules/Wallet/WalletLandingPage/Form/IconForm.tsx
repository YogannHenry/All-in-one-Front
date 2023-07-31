
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

import { JSX } from 'react/jsx-runtime';



type IconName = string;

interface WalletIconFormProps {
  StringNameIconSelection: (icon: IconName) => void;
  selectedIcon: JSX.Element | null;
  setSelectedIcon: (icon: JSX.Element | null) => void;
}

function WalletIconForm({ StringNameIconSelection, selectedIcon, setSelectedIcon }:WalletIconFormProps ) {

  const handleIconSelection = (iconComponent: JSX.Element | null, iconNameString: string) => {
    // ici, setSelectedIcon est une fonction qui a été passée en props depuis le composant parent qui permet de conserver l'icon sélectionnée sur le boutton
    setSelectedIcon(iconComponent);
    // ici, on appelle la fonction StringNameIconSelection qui a été passée en props depuis le composant parent et qui permet de conserver l'icon sélectionnée dans le state du composant parent
    StringNameIconSelection(iconNameString);
 
  };

  const Icons = [
    { icon: FolderIcon, name: 'FolderIcon' },
    { icon: CalculatorIcon, name: 'CalculatorIcon' },
    { icon: ClipboardDocumentIcon, name: 'ClipboardDocumentIcon' },
    { icon: CreditCardIcon, name: 'CreditCardIcon' },
    { icon: AcademicCapIcon, name: 'AcademicCapIcon' },
    { icon: GlobeEuropeAfricaIcon, name: 'GlobeEuropeAfricaIcon' },
    { icon: BookOpenIcon, name: 'BookOpenIcon' },
    { icon: CurrencyEuroIcon, name: 'CurrencyEuroIcon' },
    { icon: FilmIcon, name: 'FilmIcon' },
    { icon: ShoppingCartIcon, name: 'ShoppingCartIcon' },
    { icon: HomeIcon, name: 'HomeIcon' },
    { icon: TruckIcon, name: 'TruckIcon' },
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
              onClick={() =>
                handleIconSelection(
                  <Icon.icon className="h-6 w-6 text-[var(--color-primary-500)]" />, Icon.name
                
                )
              }
            >
              <Icon.icon className="h-6 w-6 text-[var(--color-primary-500)]" />
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default WalletIconForm;
