import { ReactNode } from 'react';

import Image from 'next/image';

type IHeroOneDescriptionProps = {
  title: ReactNode;
};

const HeroOneDescription = (props: IHeroOneDescriptionProps) => {
  return (
    <header className="">
      <div className="leading">
        <Image alt="" src="/0xagon.png" width={369} height={111} />
        <div className="title-properties text-shine">{props.title}</div>
      </div>
      <style jsx>
        {`
          .leading {
            @apply text-center my-12;
            margin-top: 44px;
            line-height: 3rem;
          }
          .title-properties {
            @apply whitespace-pre-line ml-auto absolute mb-6;
            transform: translate(-10px, -65px);
            font-family: 'ibmplexmonoregular';
            width: max-content;
            text-align: end;
            opacity: 0.6;
          }
          .text-shine {
            color: #a1aec1;
            padding: 12px 0px 12px 96px;
            background: linear-gradient(
              to right,
              #a1aec1 0,
              white 10%,
              #a1aec1 20%
            );
            background-position: 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shine 6s infinite linear;
            animation-fill-mode: forwards;
            -webkit-text-size-adjust: none;
            font-weight: 600;
            font-size: 16px;
            text-decoration: none;
            white-space: nowrap;
          }
          @keyframes shine {
            0% {
              background-position: 0px;
            }
            5% {
              background-position: 134px;
            }
            100% {
              background-position: 134px;
            }
          }
        `}
      </style>
    </header>
  );
};
export { HeroOneDescription };
