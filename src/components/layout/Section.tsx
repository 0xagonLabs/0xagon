import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  addExtras?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`flex max-w-screen-lg mx-auto px-3 ${
      props.addExtras ? props.addExtras : ''
    }`}
  >
    {props.children}
  </div>
);

export { Section };
