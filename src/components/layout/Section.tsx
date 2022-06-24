import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  addExtras?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mt-50 md:mt-0 flex flex-col md:flex-row overflow-y-scroll max-w-screen-lg mx-auto p-0 md:px-3 ${
      props.addExtras ? props.addExtras : ''
    }`}
  >
    {props.children}
    <style jsx>{`
      {/* .block-c {
        width: 350px;
        height: 420px;
        z-index: 50;
      } */}
    `}</style>
  </div>
);

export { Section };
