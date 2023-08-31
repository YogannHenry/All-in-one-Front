import { NavLink } from "react-router-dom";
import { Wallet } from "../../../../../@types";

function WalletMenu({ wallets }: { wallets: Wallet[] }) {

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
