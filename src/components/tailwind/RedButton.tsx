import { PropsWithChildren } from "react";

export const RedButton = ({ children }: PropsWithChildren<{}>) => {
  return (
    <button className='bg-red-700 rounded-sm border-none px-6'>{children}</button>
  );
};

