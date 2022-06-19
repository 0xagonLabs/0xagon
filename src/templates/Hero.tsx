import { useState } from 'react';

import { useMetaMask } from 'metamask-react';

import { Background } from '../components/background/Background';
import { HeroOneDescription } from '../components/hero/HeroOneDescription';
import { HeroOneProject } from '../components/hero/HeroOneProject';
import { GroupSection } from '../components/layout/GroupSection';
import { Section } from '../components/layout/Section';
import { getMainContract } from '../utils/GetContracts';

const Hero = () => {
  const [activeColor, setActiveColor] = useState('');
  const [oposite, setOposite] = useState('');
  const [adjascent1, setAdjascent1] = useState('');
  const [adjascent2, setAdjascent2] = useState('');
  const { ethereum, account, connect, status } = useMetaMask();

  const mainContract = getMainContract(ethereum);
  const [mining, setMining] = useState(false);

  const submit = async () => {
    if (status === 'notConnected') {
      console.log(status);
    } else {
      if (!mainContract) {
        console.error('Maincontract object is required to create a colletion');
        return;
      }

      setMining(true);
      try {
        const owner = await mainContract.owner();
        console.log('Create transaction started...', owner);

        // await owner.wait();
        // console.log(owner);
        // console.log(`Collection ${collectionName} created!`, createTxn.hash);

        // Router.push('/');
      } finally {
        setMining(false);
      }
    }
  };

  return (
    <Background color="flex-grow bg-gray-100 dark:bg-gray-800 ">
      <GroupSection>
        <Section>
          <HeroOneDescription title="Edge Technology"></HeroOneDescription>
        </Section>
      </GroupSection>
      <GroupSection addExtras="flex-col">
        <Section addExtras="flex-row">
          <HeroOneProject
            url=""
            path="/logos/v2_men.png"
            imgwidth={360}
            imgheight={150}
            propaganda="/men.png"
            description="Being a one-of-a-kind type of item comes with its perks.. 
            - Hodlers of $MEN will be granted MENbership status: The forever, free, 
            access, for all future whitelists in 0xagon's ecosystem. Men is a unique 
            collection of 10.000 NFTs. Every Men has a set of traits and different 
            rarities. The odds were determined by true quantum randomness - Thanks 
            to the Australian National University."
          ></HeroOneProject>
          <HeroOneProject
            path="/logos/her.png"
            propaganda="/2_her.png"
            imgwidth={110}
            imgheight={150}
            description="Her is a collection of 10.000 NFTs only redeemable by the 
            corresponding $MEN's Token Id. Made on the image of $MEN, each item of 
            the collection contemplates true quantum randomness to decide the quantity 
            of traits and its rarity level. Holders of $HER will be granted the status 
            of MENbership as well. Or HERbership, one might define."
          ></HeroOneProject>
        </Section>
        <Section>
          <HeroOneProject
            url=""
            path="/logos/v2_dam.png"
            imgwidth={150}
            imgheight={150}
            propaganda="/v3_dam.png"
            description="Decentralized Assets Management - DAM, is a serverless cloud
            service (front only) that allows users to search and manage multiple on-chain
            and off-chain assets. Connect your wallet and fetch data from multiple oracles!
            Enhanced management and deep search is available as premium service for $MEN 
            and $HER holders"
          ></HeroOneProject>
          <HeroOneProject
            url=""
            path="/logos/quantum.png"
            imgwidth={233}
            imgheight={100}
            propaganda="/quantum.png"
            description="The API that fetches quantum data from the physical world and uses a
            seed extractor to increase the uniformness and randomness of the quantum response,
            thus enhancing the quality of the outputs, providing true random numbers."
          ></HeroOneProject>
        </Section>
        <Section>
          <HeroOneProject
            path="/logos/hea.png"
            imgwidth={292}
            imgheight={140}
            propaganda="/hea.png"
            description="Hea DAO stands for Happy Ever After Decentralized Autonomous Organization.
            The DAO's purpose aims to make the world a better place by allowing donations on every
            transactions that happen on-chain. People all over Web3 can donate willingly to any 
            cause or a specific one. The donation is token represented and grants vote power inside
            the community."
          ></HeroOneProject>
          <HeroOneProject
            path="/logos/garden.png"
            imgwidth={140}
            imgheight={140}
            propaganda="/logos/garden.png"
            description="Pixel Garden is the seed of innovation, the paradigm breaker, the void breather, 
            the horizon of optimization. The future of on-chain as an authentication layer, $GRDN is a 
            prototype, an experiment for the experts, a proof of concept. It breakdown any image and uses a mapping
            function to assemble the fragments directly by external calls, paying less everytime the database increases."
          ></HeroOneProject>
        </Section>
      </GroupSection>
    </Background>
  );
};

export { Hero };
