import React, { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import s from "./OnePage.module.css";

type OnePagePropsType = {
  incButtonHandler: () => void;
  resetButtonHandler: () => void;
  currentValue: number;
  maxValue: number;
  disabledInkClass: boolean;
  disabledResetClass: boolean;
};

const OnePage: React.FC<OnePagePropsType> = ({
  incButtonHandler,
  resetButtonHandler,
  currentValue,
  disabledInkClass,
  disabledResetClass,
  maxValue,
}) => {
  let classNameText =
    maxValue === currentValue ? s.text + " " + s.textMax : s.text;

  return (
    <div className={s.wrapper}>
      <div className={classNameText}>
        <span>{currentValue}</span>
      </div>

      <div className={s.buttons}>
        <Button
          name={"inc"}
          onClickButtonHandler={incButtonHandler}
          disabled={disabledInkClass}
        />

        <Button
          name={"reset"}
          onClickButtonHandler={resetButtonHandler}
          disabled={disabledResetClass}
        />

        <NavLink to={"/Counter/"}>
          <Button
            name={"set"}
            onClickButtonHandler={() => {}}
            disabled={false}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default OnePage;
