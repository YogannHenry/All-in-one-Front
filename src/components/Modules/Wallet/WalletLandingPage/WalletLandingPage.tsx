import { useEffect, useState } from 'react';
import WalletInputForm from './Form/InputForm';
import CircleLigneBackground from '../../../../assets/SvgBackground/CircleLigneBackground';
import { Wallet } from '../../../../@types/index';
import axios from 'axios';
import API_URL from '../../../API_URL';
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
  TrashIcon
} from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';


const iconComponents: any = {
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
};


function WalletLandingPage() {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  
  const getWallets = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/wallet`);
      setWallets(data);
    } catch (error) {
      console.error("Erreur concernant la requête getWallets:", error);
    }
  };
  

  const addWallet = async (WalletDetails: Wallet) => {
    try {
      const { data } = await axios.post(`${API_URL}/wallet`, WalletDetails);

      // Mettre à jour l'état des Wallets avec le nouveau Wallet ajouté
      setWallets(data);
      getWallets();
    } catch (error) {
      console.error('Erreur lors de la création du Wallet :', error);
    }
  };

  const deleteWallet = async (walletId: number) => {
    try {
      const { data } = await axios.delete(`${API_URL}/wallet/${walletId}`);
      setWallets((wallets) => wallets.filter((wallet) => wallet.id !== walletId));
    } catch (error) {
      console.error(`Erreur concernant la supression de wallet ${walletId}:`, error);
    }
  };
  

  // Fonction pour créer un composant dynamique en fonction du nom de l'icône, dans le componentName sera appelé wallet.icon qui contient le nom de l'icône
  const createDynamicIconComponent = (componentName: string) => {
    const DynamicIconComponent = iconComponents[componentName];
    if (DynamicIconComponent) {
      return <DynamicIconComponent />;
    } else {
      return <div>Icône introuvable pour le nom : {componentName}</div>;
    }
  };

  useEffect(() => {
    getWallets();
  }, []);

  return (
    <div>
      <CircleLigneBackground />

      <div className="flex flex-col items-center pt-20 h-screen bg-base-200">
        <h1 className="text-5xl font-bold pb-10">Wallet</h1>
        <div className="card  w-full max-w-xl shadow-2xl bg-base-100">
          <div className="card-body ">
            <WalletInputForm
              onSubmit={addWallet}
            />
            <div className="card  max-md:w-full bg-base-100 shadow-xl ">
              {wallets.map((wallet: Wallet) => (
                <div className="flex justify-between items-center h-14 p-4 border-b-2 border-white bg-base-200 hover:bg-[var(--color-primary-500)] hover:text-white hover:stroke-white">
                  <NavLink
                    to={`/wallet/${wallet.id}`}
                    key={wallet.id}
                    className="flex   "
                  >
                    <div className="h-8 w-8 text-[var(--color-primary-500)]">
                      {createDynamicIconComponent(wallet.icon)}
                    </div>

                    <div className="w-full pl-5 max-lg:text-lg  text-2xl">
                      <p>{wallet.name}</p>
                    </div>
                  </NavLink>
                  <div className="card-actions justify-around opacity-0 hover:opacity-100">
                    <button
                      className=""
                      onClick={() => deleteWallet(wallet.id)}
                    >
                      <TrashIcon className="h-8 w-8 text-[var(--color-primary-500)]"/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletLandingPage;
