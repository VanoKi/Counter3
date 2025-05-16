import {ChangeEvent} from "react";

type Props = {
  title: string
  value: number
  onChange: (val: number) => void
  error: boolean
};
export const Input = ({value, title, onChange, error}: Props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.currentTarget.value))
  }

  return (
    <label className={'label-count'}>
      <span>{title}</span>
      <input
        type="number"
        value={value}
        onChange={onChangeHandler}
        className={error ? 'input-error' : ''}
      />
    </label>
  );
};
