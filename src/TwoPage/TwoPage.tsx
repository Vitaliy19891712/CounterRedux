import React, { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import s from "./TwoPage.module.css";

type TwoPagePropsType = {
  startValue: number;
  maxValue: number;
  currentValue: number;
  disabledSetClass: boolean;
  setButtonHandler: () => void;
  inputMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  inputStartValueHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TwoPage: React.FC<TwoPagePropsType> = ({
  startValue,
  maxValue,
  currentValue,
  setButtonHandler,
  inputMaxValueHandler,
  inputStartValueHandler,
  disabledSetClass,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.minWrapper}>
        <div className={s.flexRow}>
          <div className={s.text}>max value:</div>
          <Input
            onChangeHandler={inputMaxValueHandler}
            startValue={startValue}
            maxValue={maxValue}
            value={maxValue}
          />
        </div>

        <div className={s.flexRow}>
          <div className={s.text}>start value:</div>
          <Input
            onChangeHandler={inputStartValueHandler}
            startValue={startValue}
            maxValue={maxValue}
            value={startValue}
          />
        </div>
      </div>

      <div className={s.button + " " + s.minWrapper}>
        <NavLink to={"/Counter/onepage"}>
          <Button
            name={"set"}
            onClickButtonHandler={setButtonHandler}
            disabled={disabledSetClass}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default TwoPage;
