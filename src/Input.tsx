import {ChangeEvent} from "react";

type Props = {
  title: string
  value: number
  onChange: (val: number) => void
};
export const Input = ({value, title, onChange}: Props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.currentTarget.value))
  }

  return (
    <label className={'label-count'}>
      <span>{title}</span>
      <input type="number" value={value} onChange={onChangeHandler}/>
    </label>
  );
};
