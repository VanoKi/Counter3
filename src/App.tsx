import './App.css'
import {Counter} from "./components/counter/Counter.tsx";
import {useState} from "react";

function App() {

    const maxValue = 5
    const minValue = 0

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);

    const [counterValue, setCounterValue] = useState<number>(0);

    const [isEdit,setIsEdit] = useState(false);

    const [error, setError] = useState("");


    const onClickToggleHandler = () => {
        setIsEdit(prevState => !prevState);
    }

    const setMin = (value: number) => {
        if ( value < 0  ) {
            setError('Значение не может быть меньше нуля')
        }  else if(value >= maxValue){
            setError('Минимальное значение не может быть больше максимального')
        }
        else {
            setError('')
        }
        setMinValue(value);
    }
    const setMax = (value: number) => {
        if ( value <= minValue ) {
            setError('Минимальное значение не может быть больше максимального')
        } else {
            setError('')
        }
        setMaxValue(value);
    }

    const incCounter = () => {
        if (minValue < maxValue) {
            setCounterValue(counterValue+1)
        }
    }

    const resCounter = () => {
        setCounterValue(minValue)
    }


    return (
        <>
            <Counter
                counterValue = {counterValue}
                incCounter ={incCounter}
                resCounter={resCounter}
                minValue={minValue}
                maxValue={maxValue}
                isEdit={isEdit}
                onClickToggleHandler = {onClickToggleHandler}
                setMin ={setMin}
                setMax ={setMax}
                error = {error}
            />
        </>
    )

}

export default App
