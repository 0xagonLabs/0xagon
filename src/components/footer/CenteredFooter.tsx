import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  iconList: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => {
  return (
    <div className="font text-center mx-auto z-50">
      <div className="mt-8 flex justify-center">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>
      <div className="mt-8 text-sm active">
        <FooterCopyright />
      </div>
      <style jsx>
        {`
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
