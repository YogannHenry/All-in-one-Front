import { useEffect, useState } from 'react';
import WalletInputForm from './Form/InputForm';
import CircleLigneBackground from '../../../../assets/SvgBackground/CircleLigneBackground';
import { useAppSelector } from '../../../../hooks/redux';
import axios from 'axios';
import API_URL from '../../../API_URL';
import {  FolderIcon,  CalculatorIcon,  ClipboardDocumentIcon,  CreditCardIcon,  AcademicCapIcon,GlobeEuropeAfricaIcon,BookOpenIcon,CurrencyEuroIcon,FilmIcon,ShoppingCartIcon,HomeIcon,TruckIcon,} from '@heroicons/react/24/solid';

const iconComponents = {  FolderIcon,  CalculatorIcon,  ClipboardDocumentIcon,  CreditCardIcon,  AcademicCapIcon,  GlobeEuropeAfricaIcon,  BookOpenIcon,  CurrencyEuroIcon,  FilmIcon,  ShoppingCartIcon,  HomeIcon,  TruckIcon,};

interface Wallet {
  id: number;
  name: string;
  icon: string;
  wallet: [];
}

function WalletLandingPage() {
  const userId = useAppSelector((state) => Number(state.user.userId));

  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [iconString, setIconString] = useState<string>('');

  const getWallets = async () => {
    const { data } = await axios.get(`${API_URL}/wallet`);
    setWallets(data);
  };

  const addWallet = async (WalletDetails) => {
    try {
      const { data } = await axios.post(`${API_URL}/wallet`, WalletDetails);

      // Mettre à jour l'état des Wallets avec le nouveau Wallet ajouté
      setWallets((prevWallets) => [...prevWallets, data]);
    } catch (error) {
      console.error('Erreur lors de la création du Wallet :', error);
    }
  };

  const deleteWallet = async (walletId: number) => {
    const { data } = await axios.delete(`${API_URL}/wallet/${walletId}`);
    setWallets((wallets) => wallets.filter((wallet) => wallet.id !== walletId));
  };

  // Fonction pour créer un composant dynamique en fonction du nom de l'icône, dans le componentName sera appelé wallet.icon qui contient le nom de l'icône
  const createDynamicIconComponent = (componentName) => {
    const DynamicIconComponent = iconComponents[componentName];
    if (DynamicIconComponent) {
      return <DynamicIconComponent />;
    } else {
      return <div>Icône introuvable pour le nom : {componentName}</div>;
    }
  }

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
              onIconChange={setIconString}
            />
            <div className="card max-md:w-full bg-base-100 shadow-xl">
              {wallets.map((wallet: Wallet) => (
                <div
                  key={wallet.id}
                  id={wallet.id}
                  className="flex justify-between items-center h-14 p-4 border-b-2 border-white bg-base-200 hover:bg-[var(--color-primary-500)] hover:text-white hover:stroke-white"
                >
                  <div className='h-8 w-8 text-[var(--color-primary-500)]'>{createDynamicIconComponent(wallet.icon)}</div>
                  

                  <div className="w-full pl-5 text-2xl">
                    <p>{wallet.name}</p>
                  </div>
                  <div className="card-actions justify-around opacity-0 hover:opacity-100">
                    <button
                      className=""
                      onClick={() => deleteWallet(wallet.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
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
