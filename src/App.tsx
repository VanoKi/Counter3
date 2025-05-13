import './App.css'
import {Counter} from "./Counter.tsx";
import {useState} from "react";

function App() {

  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(5)

  const [isEdit, setIsEdit] =useState(true)

  const [error, setError] = useState('')
  console.log(error)

  const toggle = () => {
      setIsEdit(!isEdit)
    // console.log(minVal)
    // console.log(maxVal)
  }

  const changeMinVal = (val: number) => {
    if (val < 0) {
      setError('val should be bigger than 0')
    } else if (val >= maxVal) {
      setError('min value must be less than max value')
    } else {
      setError('')
      setMinVal(val)
    }
  }

  const changeMaxVal = (val: number) => {
    if (val <= minVal) {
      setError('max === min')
    } else {
      setError('')
      setMaxVal(val)
    }
  }

  return (
    <>
      <Counter
        changeMinVal={changeMinVal}
        changeMaxVal={changeMaxVal}
        minVal={minVal}
        maxVal={maxVal}
        toggle={toggle}
        isEdit={isEdit}
        error={error}
      />
    </>
  )

}

export default App
