import { Background } from '../components/background/Background';
import { HeroOneDescription } from '../components/hero/HeroOneDescription';
import { HeroOneProject } from '../components/hero/HeroOneProject';
import { GroupSection } from '../components/layout/GroupSection';
import { Section } from '../components/layout/Section';

const Hero = () => {

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
            path="/logos/men.png"
            imgwidth={360}
            imgheight={150}
            propaganda="/logos/men_p.png"
            description="Being a one-of-a-kind type of item comes with its perks.. 
            - Hodlers of $MEN will be granted MENbership status: The forever, free, 
            access, for all future whitelists in 0xagon's ecosystem. Men is a unique 
            collection of 10.000 NFTs. Every Men has a set of traits and different 
            rarities. The odds were determined by true quantum randomness - Thanks 
            to the Australian National University."
          ></HeroOneProject>
          <HeroOneProject
            path="/logos/her.png"
            propaganda="/logos/her_p.png"
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
            path="/logos/dam.png"
            imgwidth={150}
            imgheight={150}
            propaganda="/logos/dam_p.png"
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
            propaganda="/logos/quantum_p.png"
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
            propaganda="/logos/hea_p.png"
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
