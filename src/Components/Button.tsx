import React from "react";
import s from "./Button.module.css";

type ButtonPropsType = {
  name: string;
  onClickButtonHandler: () => void;
  disabled: boolean;
};

const Button: React.FC<ButtonPropsType> = ({
  name,
  onClickButtonHandler,
  disabled,
}) => {
  const onClickHandler = () => onClickButtonHandler();

  return (
    <span>
      <button onClick={onClickHandler} disabled={disabled} className={s.button}>
        {name}
      </button>
    </span>
  );
};

export default Button;
