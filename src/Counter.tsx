import {BoxButtons} from "./BoxButtons.tsx";
import {Button} from "./Button.tsx";
import {DisplayCounter} from "./DisplayCounter.tsx";
import {useEffect, useState} from "react";
import {Input} from "./Input.tsx";

type Props = {
  minVal: number
  maxVal: number
  toggle: () => void
  isEdit: boolean
  changeMinVal: (val:number) => void,
  changeMaxVal: (val:number) => void,
  error: boolean
}

export const Counter = ({
                    minVal,
                    maxVal,
                    toggle,
                    isEdit,
                    changeMinVal,
                    changeMaxVal,
                    error,
}: Props) => {
  const [count, setCount] =useState(minVal)
  useEffect(() => {
    setCount(minVal)
    }, [minVal])

  const incVal = () => {
    if (count < maxVal) {
      setCount(prevCount => prevCount + 1)
    }
  }
  const resetVal = () => {
    setCount(minVal)
  }
  console.log(count)

  return (
    <div className='counter'>
      <DisplayCounter>
        {isEdit ? <span className={count === maxVal ? 'red' : 'black'}>{count}</span> :
          <>
            <Input
              error={error}
              title={'min value is'}
                   value={minVal}
                   onChange={changeMinVal}/>
            <Input
              error={error}
                   title={'max value is'}
                   value={maxVal}
                   onChange={changeMaxVal}/>
          </>
        }
      </DisplayCounter>
      <BoxButtons>
        {!isEdit ? (
          <Button title={'Set'} onClick={toggle} disabled={!!error}/>
        ) : (
          <>
            <Button title={'Inc'} onClick={incVal} disabled={count === maxVal}/>
            <Button title={'Reset'} onClick={resetVal} disabled={count === minVal}/>
            <Button title={'Set'} onClick={toggle} disabled={error}/>
          </>
        )}

      </BoxButtons>
    </div>
  );
};

