import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import { incrementAC, resetAC } from "../Redux/counterReducer";
import { AppStateType } from "../Redux/store";
import s from "./OnePage.module.css";

const OnePage: React.FC = () => {
  const currentValue = useSelector((state: AppStateType) => state.counter.currentValue);
  const maxValue = useSelector((state: AppStateType) => state.counter.maxValue);
  const startValue = useSelector((state: AppStateType) => state.counter.startValue);
  const dispatch = useDispatch();

  let classNameText = maxValue === currentValue ? s.text + " " + s.textMax : s.text;
  let disabledInkClass = currentValue === maxValue;
  let disabledResetClass = currentValue === startValue;

  let buttonHandlerInc = () => dispatch(incrementAC());
  let buttonHandlerReset = () => dispatch(resetAC());

  return (
    <div className={s.wrapper}>
      <div className={classNameText}>
        <span>{currentValue}</span>
      </div>

      <div className={s.buttons}>
        <Button name={"inc"} onClickButtonHandler={buttonHandlerInc} disabled={disabledInkClass} />

        <Button name={"reset"} onClickButtonHandler={buttonHandlerReset} disabled={disabledResetClass} />

        <NavLink to={"/Counter/"}>
          <Button name={"set"} onClickButtonHandler={() => {}} disabled={false} />
        </NavLink>
      </div>
    </div>
  );
};

export default OnePage;
