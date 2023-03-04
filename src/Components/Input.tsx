import React, { ChangeEvent } from "react";
import s from "./Input.module.css";

type InputPropsType = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  startValue: number;
  maxValue: number;
  value: number;
};

const Input: React.FC<InputPropsType> = ({
  onChangeHandler,
  startValue,
  maxValue,
  value,
}) => {
  let classNameInput =
    maxValue <= startValue || startValue < 0
      ? s.errorClassInput + " " + s.input
      : s.input;
  return (
    <div className={s.inputWrap}>
      <input
        type="number"
        value={value}
        onChange={onChangeHandler}
        className={classNameInput}
      />
    </div>
  );
};

export default Input;
