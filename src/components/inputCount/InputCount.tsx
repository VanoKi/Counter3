import {ChangeEvent, useState} from "react";

type Props = {
    value: number;
    text: string;
    onChange: (value: number)=>void;
    error?: string;
};
export const InputCount = ({value,text, onChange,error}: Props) => {

    // const [inputValue, setInputValue] = useState<number>(value);

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(+event.currentTarget.value);
    }

    return (
        <label className={'label-count'}>
            {text}
            <input className={error ? 'input-error': ''} type={"number"} value={value} onChange={onChangeInputHandler}/>
        </label>
    );
};