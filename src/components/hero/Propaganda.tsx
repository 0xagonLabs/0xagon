import { MutableRefObject, useState } from 'react';

import Image from 'next/image';

type IPropagandaProps = {
  url?: string;
  addExtras?: string;
  path?: string;
  propaganda?: string;
  imgWidth?: number;
  imgHeight?: number;
  title?: string;
  description?: string;
  ref?: MutableRefObject<null>;
};

const placeHolder = '/0xagon.png';

const Propaganda = (props: IPropagandaProps) => {
  const [showBox, setShowBox] = useState(false);

  return (
    <>
      <div
        className={`info-block max-w-screen-lg flex-col flex md:hidden px-4 md:px-0 md:mb-0`}
      >
        <div className="scale-75 img-block mb-4">
          <Image
            alt=""
            src={props.propaganda ? props.propaganda : placeHolder}
            width={props.imgWidth ? props.imgWidth : 100}
            height={props.imgHeight ? props.imgHeight : 100}
          />
        </div>
        <div className="description">{props.description}</div>
        <style jsx>{`
          .img-block {
            height: auto;
            width: auto;
            display: flex;
            justify-content: center;
          }
          .description {
            @apply text-sm leading-loose text-center whitespace-pre-line ml-auto;
            font-family: 'editundo';
          }
          .info-block {
            @apply items-center relative z-50;
            margin-top: 200px;
            width: auto;
            height: auto;
          }
        `}</style>
      </div>
      <form
        className="info-hover hidden md:flex flex-col items-center"
        action={props.url}
        method="get"
        target="_blank"
      >
        <button disabled={!props.url}>
          <div
            className={`${
              props.url ? '' : 'grayscale'
            } pulsevibe max-w-screen-lg mx-auto hidden md:block p-0 md:py-6 md:px-16 ${
              props.addExtras ? props.addExtras : ''
            }`}
          >
            <div
              className={`${props.url ? 'special-cursor' : ''}`}
              onMouseEnter={() => {
                setShowBox(true);
              }}
              onMouseLeave={() => {
                setShowBox(false);
              }}
            >
              <Image
                alt=""
                src={props.path ? props.path : placeHolder}
                width={125}
                height={125}
              />
            </div>
          </div>
        </button>
        <div className={`info-block flex-col ${showBox ? 'flex' : 'hidden'}`}>
          <div className="img-block">
            <Image
              alt=""
              src={props.propaganda ? props.propaganda : placeHolder}
              width={props.imgWidth ? props.imgWidth : 100}
              height={props.imgHeight ? props.imgHeight : 100}
            />
          </div>
          <div className="description">{props.description}</div>
        </div>
        <style jsx>{`
          .special-cursor:hover {
            cursor: url('/mouse3.png'), auto;
          }
          button.a.b + .infoblock {
            display: flex;
          }
          .img-block {
            width: 100%;
            height: ${props.imgHeight};
            display: flex;
            justify-content: center;
          }
          .description {
            @apply mt-6 leading-loose text-center whitespace-pre-line ml-auto;
            font-family: 'editundo';
          }
          .info-block {
            @apply items-center absolute z-50;
            top: 14%;
            left: 0%;
            width: 400px;
            height: 500px;
          }
          .pulsevibe {
            animation: pulse 10s linear infinite;
          }
          @keyframes pulse {
            0% {
              transform: scale(1) translate(0, 0%);
            }
            50% {
              transform: scale(0.94) translate(0, 0%);
            }
          }
        `}</style>
      </form>
    </>
  );
};

export { Propaganda };
