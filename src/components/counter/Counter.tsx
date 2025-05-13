import {CounterDisplay} from "./CounterDisplay.tsx";
import {ButtonWrapper} from "../buttons/ButtonWrapper.tsx";
import {Button} from "../buttons/Button.tsx";
import {InputCount} from "../inputCount/InputCount.tsx";

type Props = {
    counterValue: number;
    incCounter: () => void;
    resCounter: () => void;
    maxValue: number;
    minValue: number;
    isEdit: boolean;
    onClickToggleHandler: () => void;
    setMin: (value: number) => void;
    setMax: (value: number) => void;
    error: string;
};

export const Counter = ({   counterValue,
                            incCounter,
                            resCounter,
                            maxValue,
                            minValue,
                            isEdit,
                            onClickToggleHandler,
                            setMin,
                            setMax,
                            error,
                        }: Props) => {


    return (
        <div className="counter">
            {error && <div>{error}</div>}
            <CounterDisplay>
                {isEdit ? (
                    <>
                        <InputCount onChange={setMin} value={minValue} text={"Min value:"} error={error}/>
                        <InputCount onChange={setMax} value={maxValue} text={"Max value:"}/>
                    </>
                ) : (
                    <span className={minValue >= maxValue ? "red" : "black"}>{counterValue}</span>
                )}


            </CounterDisplay>

            <ButtonWrapper>
                {isEdit ?
                    (
                        <Button title={"set"} onClick={onClickToggleHandler} disabled={!!error}/>
                    ) :
                    (
                        <>
                            <Button title={"inc"} onClick={incCounter} disabled={minValue === maxValue}/>
                            <Button title={"res"} onClick={resCounter}/>
                            <Button title={"set"} onClick={onClickToggleHandler}/>
                        </>
                    )}


            </ButtonWrapper>
        </div>
    );
};