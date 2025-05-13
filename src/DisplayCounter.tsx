import {ReactNode} from 'react';

type Props = {
  children: ReactNode
}

export const DisplayCounter = ({children}: Props) => {
  return (
    <div className='counter-display'>
      {children}
    </div>
  );
};

