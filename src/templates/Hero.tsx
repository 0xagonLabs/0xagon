import { Background } from '../components/background/Background';
import { Logo } from '../components/hero/Logo';
import { Propaganda } from '../components/hero/Propaganda';
import { GroupSection } from '../components/layout/GroupSection';
import { Section } from '../components/layout/Section';
import { SectionTitle } from '../components/layout/SectionTitle';
import { Footer } from './Footer';

const Hero = () => {
  return (
    <div className="md:overflow-visible">
      <Background itClasses="h-screen flex-grow relative bg-gray-100">
        <SectionTitle>
          <Logo title="Labs"></Logo>
        </SectionTitle>
        <GroupSection addExtras="flex-col md:flex-col mx-5 relative overflow-y-scroll md:overflow-hidden mb-24">
          <div id="flyers"></div>
          <Section>
            <Propaganda
              path="/her.png"
              propaganda="/her_p.png"
              imgWidth={110}
              imgHeight={150}
              description="Her is a collection of 10.000 NFTs only redeemable by the 
              corresponding $MEN's Token Id. Made on the image of $MEN, each item of 
              the collection contemplates true quantum randomness to decide the quantity 
              of traits and its rarity level. Holders of $HER will be granted the status 
              of MENbership as well. Or HERbership, one might define"
            ></Propaganda>
            <Propaganda
              url="https://demo-men.vercel.app/"
              path="/men.png"
              imgWidth={360}
              imgHeight={150}
              propaganda="/men_p.png"
              description="Being a one-of-a-kind type of item comes with its perks.. 
              - Hodlers of $MEN will be granted MENbership status: The forever, free, 
              access, for all future whitelists in 0xagon's ecosystem. Men is a unique 
              collection of 10.000 NFTs. Every Men has a set of traits and different 
              rarities. The odds were determined by true quantum randomness - Thanks 
              to the Australian National University"
            ></Propaganda>
          </Section>
          <Section>
            <Propaganda
              url=""
              path="/dam.png"
              imgWidth={150}
              imgHeight={150}
              propaganda="/dam_p.png"
              description="Decentralized Assets Management - DAM, is a serverless cloud
              service (front only) that allows users to search and manage multiple on-chain
              and off-chain assets. Connect your wallet and fetch data from multiple oracles!
              Enhanced management and deep search is available as premium service for $MEN 
              and $HER holders"
            ></Propaganda>
            <Propaganda
              url=""
              path="/quantum.png"
              imgWidth={233}
              imgHeight={100}
              propaganda="/quantum_p.png"
              description="The API that fetches quantum data from the physical world and uses a
              seed extractor to increase the uniformness and randomness of the quantum response,
              thus enhancing the quality of the outputs, providing true random numbers"
            ></Propaganda>
          </Section>
          <Section>
            <Propaganda
              path="/hea.png"
              imgWidth={292}
              imgHeight={140}
              propaganda="/hea_p.png"
              description="Hea DAO stands for Happy Ever After Decentralized Autonomous Organization.
              The DAO's purpose aims to make the world a better place by allowing donations on every
              transactions that happen on-chain. People all over Web3 can donate willingly to any 
              cause or a specific one"
            ></Propaganda>
            <Propaganda
              path="/garden.png"
              imgWidth={140}
              imgHeight={140}
              propaganda="/garden.png"
              description="Pixel Garden is the seed of innovation, the paradigm breaker, the void breather, 
              the horizon of optimization. The future of on-chain as an authentication layer, $GRDN is a 
              prototype, an experiment for the experts, a proof of concept. It breakdown any image and uses a mapping
              function to assemble the fragments directly by external calls, paying less everytime the database increases"
            ></Propaganda>
          </Section>
        </GroupSection>
        <Footer />
      </Background>
    </div>
  );
};

export { Hero };
