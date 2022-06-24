import { ReactNode } from 'react';

type ISectionProps = {
  addExtras?: string;
  children: ReactNode;
};
const GroupSection = (props: ISectionProps) => (
  <div className={`${props.addExtras} flex max-w-screen-lg md:mx-auto`}>
    {props.children}
  </div>
);

export { GroupSection };
