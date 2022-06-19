import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => {
  return (
    <div className="font text-center mx-auto z-50">
      {/* {props.logo} */}

      {/* <nav>
        <ul className="navbar flex flex-row justify-center text-xl text-gray-800">
          {props.children}
        </ul>
      </nav> */}

      <div className="mt-8 flex justify-center">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>

      <div className="mt-8 text-sm active">
        <FooterCopyright />
      </div>

      <style jsx>
        {`
           {
            /* .navbar :global(li) {
            @apply mx-4;
          } */
          }

          .font {
            font-family: 'ibmplexmonoregular';
          }

          .active {
            transform: translate(1px);
          }
        `}
      </style>
    </div>
  );
};
export { CenteredFooter };
