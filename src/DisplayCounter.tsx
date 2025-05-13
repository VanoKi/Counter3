import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode
}

export const DisplayCounter2 = ({children}: Props) => {
  return (
    <div className='counter-display'>
      {children}
    </div>
  );
};

