import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import s from "./TwoPage.module.css";
import { AppStateType } from "../Redux/store";
import { changeMaxAC, changeStartAC, resetAC } from "../Redux/counterReducer";

const TwoPage: React.FC = () => {
  const currentValue = useSelector((state: AppStateType) => state.counter.currentValue);
  const maxValue = useSelector((state: AppStateType) => state.counter.maxValue);
  const startValue = useSelector((state: AppStateType) => state.counter.startValue);
  const dispatch = useDispatch();

  const InputHandlerMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = +e.currentTarget.value;
    dispatch(changeMaxAC(newMaxValue));
  };
  const InputHandlerStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartValue = +e.currentTarget.value;
    dispatch(changeStartAC(newStartValue));
  };
  let buttonHandlerReset = () => dispatch(resetAC());

  let disabledSetClass = maxValue <= startValue || startValue < 0;

  return (
    <div className={s.wrapper}>
      <div className={s.minWrapper}>
        <div className={s.flexRow}>
          <div className={s.text}>max value:</div>
          <Input onChangeHandler={InputHandlerMax} startValue={startValue} maxValue={maxValue} value={maxValue} />
        </div>

        <div className={s.flexRow}>
          <div className={s.text}>start value:</div>
          <Input onChangeHandler={InputHandlerStart} startValue={startValue} maxValue={maxValue} value={startValue} />
        </div>
      </div>

      <div className={s.button + " " + s.minWrapper}>
        <NavLink to={"/Counter/onepage"}>
          <Button name={"set"} onClickButtonHandler={buttonHandlerReset} disabled={disabledSetClass} />
        </NavLink>
      </div>
    </div>
  );
};

export default TwoPage;
