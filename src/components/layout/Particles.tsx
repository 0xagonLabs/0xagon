import { ReactNode } from 'react';

import { Stats } from '../utils/lib/stats';

type IParticlesProps = {
  children: ReactNode;
};

const Particles = (props: IParticlesProps) => {
  let countParticles;
  let stats;
  let update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  countParticles = document.querySelector('.js-count-particles');
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  return (
    <div className="max-w-screen-lg mx-auto px-3 flex">
      <div className="count-particles">
        <span className="js-count-particles">--</span> particles
      </div>
      <div id="particles-js"></div>
      <div className="spine"></div>
      {props.children}
      <style jsx>
        {`
          canvas {
            display: block;
            vertical-align: bottom;
          }

          /* ---- stats.js ---- */

          .count-particles {
            background: #000022;
            position: absolute;
            top: 48px;
            left: 0;
            width: 80px;
            color: #13e8e9;
            font-size: 0.8em;
            text-align: left;
            text-indent: 4px;
            line-height: 14px;
            padding-bottom: 2px;
            font-family: Helvetica, Arial, sans-serif;
            font-weight: bold;
          }

          .js-count-particles {
            font-size: 1.1em;
          }

          #stats,
          .count-particles {
            -webkit-user-select: none;
            margin-top: 5px;
            margin-left: 5px;
          }

          #stats {
            border-radius: 3px 3px 0 0;
            overflow: hidden;
          }

          .count-particles {
            border-radius: 0 0 3px 3px;
          }

          /* ---- particles.js container ---- */

          #particles-js {
            width: 100%;
            height: 100%;
            background-color: #b61924;
            background-image: url('');
            background-size: cover;
            background-position: 50% 50%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </div>
  );
};

export { Particles };
