import { useState } from 'react';

import Image from 'next/image';

type IHeroOneProjectProps = {
  url?: string;
  addExtras?: string;
  path?: string;
  propaganda?: string;
  imgwidth?: number;
  imgheight?: number;
  title?: string;
  description?: string;
};

const placeHolder = '/0xagon_full_black.png';

const HeroOneProject = (props: IHeroOneProjectProps) => {
  const [showBox, setShowBox] = useState(false);

  return (
    <>
      <form
        className="info-hover flex flex-col items-center"
        action={props.url}
        method="get"
        target="_blank"
      >
        <button disabled={props.url === undefined}>
          <div
            className={`${
              props.url ? '' : 'grayscale'
            } pulsevibe max-w-screen-lg mx-auto py-6 px-16 ${
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
              width={props.imgwidth ? props.imgwidth : 100}
              height={props.imgheight ? props.imgheight : 100}
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
            height: ${props.imgheight};
            display: flex;
            justify-content: center;
          }
          .description {
            @apply mt-6 leading-loose text-center whitespace-pre-line ml-auto;
            font-family: 'editundo', 'sans-serif';
          }
          .info-block {
            @apply items-center absolute z-50;
            top: 27%;
            left: 8%;
            width: 400px;
            height: 500px;
            animation: float 20s linear infinite;
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
          @keyframes float {
            0% {
              transform: translate(0, 0%);
            }
            50% {
              transform: translate(0, 3%);
            }
          }
        `}</style>
      </form>
    </>
  );
};

export { HeroOneProject };
