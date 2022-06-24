import { ReactNode } from 'react';

type ISectionTitleProps = {
  title?: string;
  addExtras?: string;
  children: ReactNode;
};

const SectionTitle = (props: ISectionTitleProps) => (
  <div
    className={`relative justify-center flex max-w-screen-lg mx-auto px-3 ${
      props.addExtras ? props.addExtras : ''
    }`}
  >
    {props.children}
  </div>
);

export { SectionTitle };
