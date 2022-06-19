import { ethers } from 'ethers';

import main from './Men.json';

export const getMainContract = (
  ethereum:
    | ethers.providers.ExternalProvider
    | ethers.providers.JsonRpcFetchFunc
) => {
  const { MEN_MATIC } = process.env;
  const mainContractABI = main.abi;

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    if (MEN_MATIC) {
      return new ethers.Contract(MEN_MATIC, mainContractABI, signer);
    }
  }
  return undefined;
};
