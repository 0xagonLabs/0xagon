import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  itClasses?: string;
};

const Background = (props: IBackgroundProps) => {
  return (
    <div className={props.itClasses}>
      <div id="clouds" className="fixed overflow-hidden">
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      {props.children}
      <style jsx>
        {`
          #clouds {
            width: 100%;
            height: 100%;
            background: #c9dbe9;
            background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
            background-image: linear-gradient(90deg, #c9dbe9 10%, #fff 100%);
            background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
          }

          /*Time to finalise the cloud shape*/
          .cloud {
            width: 200px;
            height: 60px;
            background: #fff;
            border-radius: 200px;
            -moz-border-radius: 200px;
            -webkit-border-radius: 200px;

            position: relative;
          }

          .cloud:before,
          .cloud:after {
            content: '';
            position: absolute;
            background: #fff;
            width: 100px;
            height: 80px;
            position: absolute;
            top: -15px;
            left: 10px;

            border-radius: 100px;
            -moz-border-radius: 100px;
            -webkit-border-radius: 100px;

            -webkit-transform: rotate(30deg);
            transform: rotate(30deg);
            -moz-transform: rotate(30deg);
          }

          .cloud:after {
            width: 120px;
            height: 120px;
            top: -55px;
            left: auto;
            right: 15px;
          }

          /*Time to animate*/
          .x1 {
            left: 800px;
            top: 30px;
            z-index: 50;
            -webkit-animation: moveclouds 15s linear infinite;
            -moz-animation: moveclouds 15s linear infinite;
            -o-animation: moveclouds 15s linear infinite;
            animation: moveclouds 15s linear infinite;
          }

          /*variable speed, opacity, and position of clouds for realistic effect*/
          .x2 {
            left: 750px;

            -webkit-transform: scale(0.6);
            -moz-transform: scale(0.6);
            transform: scale(0.6);
            opacity: 0.6; /*opacity proportional to the size*/

            /*Speed will also be proportional to the size and opacity*/
            /*More the speed. Less the time in 's' = seconds*/
            -webkit-animation: moveclouds 30s linear infinite;
            -moz-animation: moveclouds 30s linear infinite;
            -o-animation: moveclouds 30s linear infinite;
            animation: moveclouds 30s linear infinite;
          }

          .x3 {
            left: 825px;
            top: 30px;
            z-index: 50;
            -webkit-transform: scale(0.8);
            -ms-transform: scale(0.8);
            transform: scale(0.4);
            opacity: 0.8;
            -webkit-animation: moveclouds 12s linear infinite;
            -webkit-animation: moveclouds 12s linear infinite;
            animation: moveclouds 12s linear infinite;
          }

          .x4 {
            left: 470px;
            top: -290px;

            -webkit-transform: scale(0.75);
            -moz-transform: scale(0.75);
            transform: scale(0.75);
            opacity: 0.75; /*opacity proportional to the size*/

            -webkit-animation: moveclouds 18s linear infinite;
            -moz-animation: moveclouds 18s linear infinite;
            -o-animation: moveclouds 18s linear infinite;
            animation: moveclouds 18s linear infinite;
          }

          .x5 {
            left: 820px;
            top: 500px;

            -webkit-transform: scale(0.8);
            -moz-transform: scale(0.8);
            transform: scale(0.8);
            opacity: 0.8; /*opacity proportional to the size*/

            -webkit-animation: moveclouds 17s linear infinite;
            -moz-animation: moveclouds 17s linear infinite;
            -o-animation: moveclouds 17s linear infinite;
            animation: moveclouds 17s linear infinite;
          }

          @-webkit-keyframes moveclouds {
            0% {
              margin-left: 1000px;
            }
            100% {
              margin-left: -1000px;
            }
          }
          @-moz-keyframes moveclouds {
            0% {
              margin-left: 1000px;
            }
            100% {
              margin-left: -1000px;
            }
          }
          @-o-keyframes moveclouds {
            0% {
              margin-left: 1000px;
            }
            100% {
              margin-left: -1000px;
            }
          }
          @keyframes moveclouds {
            0% {
              margin-left: 1000px;
            }
            100% {
              margin-left: -1000px;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Background };
