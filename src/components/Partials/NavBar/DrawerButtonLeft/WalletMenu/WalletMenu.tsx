import axios from "axios";
import { List } from "postcss/lib/list";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import API_URL from "../../../../API_URL";

function WalletMenu() {

 
    const [wallets, setWallets] = useState<List[]>([]);
  
    const getWallets = async () => {
      const { data } = await axios.get(`${API_URL}/wallet`);
      setWallets(data);
    
    };
  
    useEffect(() => {
      getWallets();
    }, []);


  return (
    <ul className="flex flex-col items-center">
      <li>
        <a className="font-bold underline uppercase text-base">Wallet</a>
      </li>
      {wallets.map((wallet) => (
        <li key={wallet.id}>
          <NavLink to={`/wallet/${wallet.id}`}>
            <a>{wallet.name}</a>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default WalletMenu;
