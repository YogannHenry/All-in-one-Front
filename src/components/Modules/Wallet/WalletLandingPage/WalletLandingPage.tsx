import { useState } from 'react';
import WalletInputForm from './Form/InputForm';

function WalletLandingPage() {
  const [wallets, setWallets] = useState([]);

  const addWallet = (wallet) => {
    setWallets([...wallets, wallet]);
  };

  const deleteWallet = (walletId) => {
    setWallets(wallets.filter((wallet) => wallet.id !== walletId));
  };

  console.log(wallets);
  return (
    <div>
      <svg
        className="z-0 absolute w-screen h-screen stroke-[var(--color-primary-300)]"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        version="1.1"
        viewBox="0 0 800 800"
      >
        <g transform="matrix(0.6560590289905073,0.754709580222772,-0.754709580222772,0.6560590289905073,670.4602204929058,-66.30744368531168)">
          <circle
            r="17"
            cx="747"
            cy="787"
            stroke-width="7"
            stroke="[var(--color-primary-300)]"
            fill="none"
            opacity="0.01"
            transform="matrix(-0.2756793431162386,0.9409822041933199,-0.9614081230521446,-0.34248951330057,454.7251258666172,28.154992847241772)"
          />
          <circle
            r="28.083333333333336"
            cx="718.0833333333334"
            cy="754.75"
            stroke-width="7.75"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.0925"
            transform="matrix(-0.12477199163151484,0.9833104640905669,-0.9923144446380568,-0.18816945288517378,422.48024616411766,-14.374299242357097)"
          />
          <circle
            r="39.16666666666667"
            cx="689.1666666666666"
            cy="722.5"
            stroke-width="8.5"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.17500000000000002"
            transform="matrix(0.029087795303165208,1.0005292322121404,-0.9996826845932539,-0.029112427323137402,386.3165292439072,-51.19756635577812)"
          />
          <circle
            r="50.25"
            cx="660.25"
            cy="690.25"
            stroke-width="9.25"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.2575"
            transform="matrix(0.18225113938939907,0.9922098191860017,-0.9833391526147329,0.1306269008265757,346.9965639874756,-81.29424317799885)"
          />
          <circle
            r="61.333333333333336"
            cx="631.3333333333334"
            cy="658"
            stroke-width="10"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.34"
            transform="matrix(0.3310858297456995,0.9585734493610518,-0.9436723854611498,0.28697805198647286,305.3582602390603,-103.8722303528948)"
          />
          <circle
            r="72.41666666666667"
            cx="602.4166666666666"
            cy="625.75"
            stroke-width="10.75"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.42250000000000004"
            transform="matrix(0.4720624288577052,0.9004854065091233,-0.881623913561165,0.43595814479061923,262.29859335277234,-118.38439581846683)"
          />
          <circle
            r="83.5"
            cx="573.5"
            cy="593.5"
            stroke-width="11.5"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.505"
            transform="matrix(0.6018379392966422,0.8194328434586531,-0.7986659207983077,0.5737730540463661,218.75561611117993,-124.53710222750726)"
          />
          <circle
            r="94.58333333333334"
            cx="544.5833333333333"
            cy="561.25"
            stroke-width="12.25"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.5875"
            transform="matrix(0.7173350485564952,0.7174868229536745,-0.6967663273621696,0.6969137498107489,175.68906373316375,-122.29079098739874)"
          />
          <circle
            r="105.66666666666667"
            cx="515.6666666666666"
            cy="529"
            stroke-width="13"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.67"
            transform="matrix(0.8158150741987271,0.5972495557029629,-0.5783421235340156,0.8022453786119692,134.05991440714172,-111.85285608125935)"
          />
          <circle
            r="116.75"
            cx="486.75"
            cy="496.75"
            stroke-width="13.75"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.7525000000000001"
            transform="matrix(0.8949428808132343,0.46178817574834513,-0.44620206063183276,0.8870868320591907,94.80933065036302,-93.66332885122256)"
          />
          <circle
            r="127.83333333333334"
            cx="457.8333333333333"
            cy="464.5"
            stroke-width="14.5"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.8350000000000001"
            transform="matrix(0.9528422305675176,0.31455673350817015,-0.30348005748293305,0.9492787892005737,58.83742039391268,-68.37407899675532)"
          />
          <circle
            r="138.91666666666669"
            cx="428.91666666666663"
            cy="432.25"
            stroke-width="15.25"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="0.9175000000000001"
            transform="matrix(0.9881402558152219,0.1593083845685247,-0.15356090075002632,0.9872385109164611,26.98230780284638,-36.82239654112516)"
          />
          <circle
            r="150"
            cx="400"
            cy="400"
            stroke-width="16"
            stroke="[var(--color-primary-300)]"            fill="none"
            opacity="1"
            transform="matrix(1,0,0,1,0,0)"
          />
        </g>
      </svg>

      <div className="flex flex-col items-center pt-20 h-screen bg-base-200">
        <h1 className="text-5xl font-bold pb-10">Wallet</h1>
        <div className="card  w-full max-w-xl shadow-2xl bg-base-100">
          <div className="card-body ">
            <WalletInputForm onSubmit={addWallet} />

            <div className="card max-md:w-full bg-base-100 shadow-xl">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  id={wallet.id}
                  className="flex justify-between items-center h-14 p-4 border-b-2 border-white bg-base-200 hover:bg-[var(--color-primary-500)] hover:text-white hover:stroke-white"
                >
                  {wallet.icon}

                  <div className="w-full pl-5">
                    <p>{wallet.description}</p>
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
