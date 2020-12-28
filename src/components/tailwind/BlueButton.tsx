import { PropsWithChildren } from "react"

export const BlueButton = ({ children }: PropsWithChildren<{}>) => {
  return (
    <button className='bg-blue-700 rounded-sm border-none px-6'>{children}</button>
  );
}