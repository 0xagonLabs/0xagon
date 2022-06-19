import { ReactNode } from 'react';

import Draggable from 'react-draggable';

type IBackgroundDetailsProps = {
  color: string;
  color2: string;
  color3: string;
  color4: string;
  children?: ReactNode;
};

const BackgroundDetails = (props: IBackgroundDetailsProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 flex">
      <div className="spine">
        <Draggable>
          <div className="triangle-left"></div>
        </Draggable>
        <Draggable>
          <div className="rotate">
            <div className="triangle-rotate"></div>
          </div>
        </Draggable>
        <Draggable>
          <div className="rotate2">
            <div className="triangle-rotate2"></div>
          </div>
        </Draggable>
        <Draggable>
          <div className="rotate3">
            <div className="triangle-rotate3"></div>
          </div>
        </Draggable>
        {/* <div className="rotate4">
          <div className="triangle-rotate4"></div>
        </div>
        <div className="rotate5">
          <div className="triangle-rotate5"></div>
        </div> */}
        {props.children}
        <style jsx>
          {`
            .spine {
              z-index: 0;
              align-items: center;
              height: 300px;
              width: 1024px;
              shape-outside: polygon(0 0, 100% 50%, 0 100%);
              background-color: transparent;
            }
            .rotate {
              position: absolute;
              bottom: 0px;
              left: 230px;
              width: 100px;
              height: 100px;
              transform: translate(-600%, 12%) rotate(-30deg);
            }
            .triangle-rotate {
              position: relative;
              width: 0;
              height: 0;
              border-bottom: 100px solid ${props.color};
              border-left: 100px solid transparent;
            }
            .rotate2 {
              position: absolute;
              bottom: 0px;
              left: 330px;
              width: 100px;
              height: 100px;
            }
            .triangle-rotate2 {
              position: relative;
              width: 0;
              height: 0;
              border-bottom: 100px solid ${props.color};
              border-right: 150px solid transparent;
            }

            .triangle-left {
              position: absolute;
              width: 0;
              height: 0;
              bottom: 50px;
              right: 100px;
              transform: translate(200px, 114px);
              border-top: 50px solid transparent;
              border-right: 100px solid ${props.color};
              border-bottom: 50px solid transparent;
              z-index: 50;
            }
            .rotate3 {
              position: absolute;
              bottom: 120px;
              right: 105px;
              width: 100px;
              height: 100px;
              transform: translate(-365%, 40%) rotate(-50deg);
              z-index: 50;
            }
            .triangle-rotate3 {
              position: relative;
              width: 0;
              height: 0;
              border-top: 50px solid transparent;
              border-left: 100px solid ${props.color};
              border-bottom: 50px solid transparent;
            }
            .rotate4 {
              position: absolute;
              right: 30px;
              width: 100px;
              height: 100px;
              transform: translate(-240%, 40%) rotate(-77deg);
              z-index: 50;
            }
            .triangle-rotate4 {
              position: relative;
              width: 0;
              height: 0;
              border-left: 200px solid transparent;
              border-right: 60px solid transparent;
              border-top: 115px solid ${props.color};
            }
            .rotate5 {
              position: absolute;
              right: 30px;
              width: 100px;
              height: 100px;
              transform: scale(0.2, 0.2) translate(-700%, -350%) rotate(45deg);
              z-index: 50;
            }
            .triangle-rotate5 {
              position: relative;
              width: 0;
              height: 0;
              border-top: 40px solid transparent;
              border-left: 140px solid ${props.color};
              border-bottom: 40px solid transparent;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export { BackgroundDetails };
