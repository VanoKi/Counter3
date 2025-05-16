import {PropsWithChildren} from 'react';

// type Props = {
//   children: ReactNode
// }

export const DisplayCounter = ({children}: PropsWithChildren) => {
  return (
    <div className='counter-display'>
      {children}
    </div>
  );
};

