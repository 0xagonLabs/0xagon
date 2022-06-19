// not using anymore, using https://github.com/VGLoic/metamask-react
import { useState, useEffect, createContext, ReactNode } from 'react';

import { MetaMaskInpageProvider } from '@metamask/providers';
import { Maybe } from '@metamask/providers/dist/utils';

interface EthereumContextInterface {
  ethereum: MetaMaskInpageProvider | undefined;
  connectedAccount: string;
  connectAccount: () => Promise<void>;
}

const MetaMaskAccountCtx = createContext<EthereumContextInterface | null>(null);

type IMetaMaskProps = {
  children: ReactNode;
};

const MetaMaskAccountProvider = (props: IMetaMaskProps) => {
  const [ethereum, setEthereum] = useState<MetaMaskInpageProvider | undefined>(
    undefined
  );
  const [connectedAccount, setConnectedAccount] = useState<string>('');

  const setEthereumFromWindow = async (): Promise<void> => {
    if (window.ethereum) {
      // Reload if chain changes, see <https://docs.metamask.io/guide/ethereum-provider.html#chainchanged>
      window.ethereum.on('chainChanged', (_chainId: any) =>
        window.location.reload()
      );
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const rinkebyId = '0x4'; // See <https://docs.metamask.io/guide/ethereum-provider.html#chain-ids>
      if (chainId === rinkebyId) {
        setEthereum(window.ethereum);
      } else {
        alert('Please use Rinkeby network');
      }
    }
  };

  const handleAccounts = (accounts: Maybe<string[]>) => {
    if (accounts) {
      const account = accounts[0];
      console.log('We have an authorized account: ', account);
      if (account) setConnectedAccount(account);
    } else {
      console.log('No authorized accounts yet');
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getConnectedAccount = async () => {
    if (ethereum) {
      const accounts: Maybe<string[]> = await ethereum.request({
        method: 'eth_accounts',
      });
      console.log(accounts);
      handleAccounts(accounts);
    }
  };

  useEffect(() => {
    const doFirst = async () => {
      await setEthereumFromWindow();
      await getConnectedAccount();
    };
    doFirst();
  }, [getConnectedAccount]);

  const connectAccount = async () => {
    if (!ethereum) {
      console.error('Ethereum object is required to connect an account');
      return;
    }

    const accounts: Maybe<string[]> = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    handleAccounts(accounts);
  };

  const value = { ethereum, connectedAccount, connectAccount };

  return (
    <MetaMaskAccountCtx.Provider value={value}>
      {props.children}
    </MetaMaskAccountCtx.Provider>
  );
};

export default MetaMaskAccountProvider;

// export function useMetaMaskAccount() {
//   return useContext(MetaMaskAccountContext);
// }
