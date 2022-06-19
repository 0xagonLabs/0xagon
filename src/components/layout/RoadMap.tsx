import { ReactNode } from 'react';

type IRoadMapProps = {
  color: string;
  season: string;
  title: string;
  description: string;
  children?: ReactNode;
};

const RoadMap = (props: IRoadMapProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 flex pt-20 pb-28">
      <div className="spine">
        <div className="season">{props.season}</div>
        <div className="card">
          <div className="card-title"><text className='dark:text-gray-200'>{props.title}</text></div>
          <div className="card-description"><text className='dark:text-gray-200'>{props.description}</text></div>
        </div>
      </div>
      {props.children}
      <style jsx>
        {`
          .spine {
            display: flex;
            align-items: center;
            height: 100%;
            background-color: transparent;
          }
          .season {
            @apply max-w-screen-lg font-editundo text-9xl;
            display: flex;
            align-items: center;
            padding-right: 75px;
            height: 100%;
            border-right: solid 10px;
            border-color: ${props.color};
            color: ${props.color};
            transition: all 4s ease-out;
          }
          .card {
            @apply max-w-screen-lg;
            position: relative;
            display: inline-block;
            align-items: center;
            padding-left: 100px;
            background-color: transparent;
            border-left: solid 10px;
            border-color: ${props.color};
            transition: all 4s ease-out;
          }
          .card-title {
            @apply font-editundo text-3xl;
            color: black;
            position: relative;
          }
          .card-description {
            @apply font-editundo text-xl;
            color: black;
            line-break: auto;
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

export { RoadMap };
