import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode
}

const BoxButtons = ({children}: Props) => {
  return (
    <div className='button-wrapper'>
      {children}
    </div>
  );
};

export default BoxButtons;