import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  addExtras?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mt-50 md:mt-0 flex flex-col md:flex-row max-w-screen-lg mx-auto p-0 md:px-3 ${
      props.addExtras ? props.addExtras : ''
    }`}
  >
    {props.children}
  </div>
);

export { Section };
