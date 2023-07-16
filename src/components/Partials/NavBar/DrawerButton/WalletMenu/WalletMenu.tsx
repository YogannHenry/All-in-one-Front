import { NavLink } from "react-router-dom";

function WalletMenu() {
  return (
    <ul className="flex flex-col items-center">
      <li>
        <a className="font-bold underline uppercase text-base">Wallet</a>
      </li>
      <li>
        <NavLink to="/WalletDocumentsPage">Santé</NavLink>
      </li>
      <li>
        <a>Facture</a>
      </li>
      <li>
        <a>ID</a>
      </li>
    </ul>
  );
}

export default WalletMenu;
