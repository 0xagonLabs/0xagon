import { ReactNode } from 'react';

import Image from 'next/image';

type ILogoProps = {
  title: ReactNode;
};

const Logo = (props: ILogoProps) => {
  return (
    <header className="">
      <div className="md:hidden block md:leading">
        <div className="leading-sm">
          <Image alt="" src="/0xagon.png" width={246} height={74} />
          <div className="title-properties text-shine tp-sm">{props.title}</div>
        </div>
      </div>
      <div className="hidden md:block leading">
        <Image alt="" src="/0xagon.png" width={369} height={111} />
        <div className="title-properties text-shine">{props.title}</div>
      </div>
      <style jsx>
        {`
          .leading-sm {
            @apply h-screen;
            padding-top: 100%;
            padding-bottom: 100%;
            display: flex;
            align-items: center;
          }
          .leading {
            @apply text-center;
            margin-top: 44px;
          }
          .tp-sm {
            position: absolute;
            transform: translate(-40px, 42px) !important;
          }
          .title-properties {
            @apply whitespace-pre-line mr-auto;
            transform: translate(-10px, -40px);
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
export { Logo };
