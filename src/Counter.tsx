import BoxButtons from "./BoxButtons.tsx";
import Button2 from "./Button2.tsx";
import {DisplayCounter2} from "./DisplayCounter2.tsx";
import {useEffect, useState} from "react";
import {Input} from "./Input.tsx";

type Props = {
  minVal: number
  maxVal: number
  toggle: () => void
  isEdit: boolean
  changeMinVal: (val:number) => void,
  changeMaxVal: (val:number) => void,
  error: string
}

const Counter2 = ({
                    minVal,
                    maxVal,
                    toggle,
                    isEdit,
                    changeMinVal,
                    changeMaxVal,
                    error}: Props) => {
  const [count, setCount] =useState(minVal)
  useEffect(() => {
    setCount(minVal)
    }, [minVal])

  // console.log('rerender')
  // useEffect(()=> {
  //   console.log(count)}, [count])
  const incVal = () => {
    if (count < maxVal) {
      setCount(prevCount => prevCount + 1)
      // setTimeout(()=> {
      //   console.log(count)}, 2000)
      // setCount(prevCount => prevCount + 1)
    }
  }
  const resetVal = () => {
    setCount(minVal)
  }
  return (
    <div className='counter'>
      <DisplayCounter2>
        {isEdit ? <span className={count === maxVal ? 'red' : 'black'}>{count}</span> :
          <>
            <Input title={'min value is'} value={minVal} onChange={changeMinVal}/>
            <Input title={'max value is'} value={maxVal} onChange={changeMaxVal}/>
          </>
        }
      </DisplayCounter2>
      <BoxButtons>
        {!isEdit ? (
          <Button2 title={'Set'} onClick={toggle} disabled={!!error}/>
        ) : (
          <>
            <Button2 title={'Inc'} onClick={incVal} disabled={count === maxVal}/>
            <Button2 title={'Reset'} onClick={resetVal} disabled={count === minVal}/>
            <Button2 title={'Set'} onClick={toggle} disabled={!!error}/>
          </>
        )}

      </BoxButtons>
    </div>
  );
};

export default Counter2;