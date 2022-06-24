import { ReactNode } from 'react';

type ISectionFooterProps = {
  title?: string;
  addExtras?: string;
  children: ReactNode;
};

const SectionFooter = (props: ISectionFooterProps) => (
  <div
    className={`flex max-w-screen-lg mx-auto px-3 ${
      props.addExtras ? props.addExtras : ''
    }`}
  >
    {props.children}
  </div>
);

export { SectionFooter };
