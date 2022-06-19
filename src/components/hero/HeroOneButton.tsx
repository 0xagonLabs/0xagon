import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  return (
    <>
      <div className="container-men">
        <div className="btn">{props.button}</div>
        <style jsx>{`
          .container-men {
            position: relative;
            width: 300px;
            height: 300px;
          }
          .background {
            z-index: 0;
            will-change: transform opacity;
            animation: spin 4s ease-out infinite;
          }
          .btn {
            position: relative;
            text-align: center;
            margin-top: 50px;
          }
        `}</style>
      </div>
    </>
  );
};

export { HeroOneButton };
