import {ReactNode} from 'react';

type Props = {
  children: ReactNode
}

export const BoxButtons = ({children}: Props) => {
  return (
    <div className='button-wrapper'>
      {children}
    </div>
  );
};

