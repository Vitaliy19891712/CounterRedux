import { ChangeEvent, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import OnePage from "./OnePage/OnePage";

import TwoPage from "./TwoPage/TwoPage";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let maxValueStr = localStorage.getItem("maxValue");
    let startValueStr = localStorage.getItem("startValue");
    let currentValueStr = localStorage.getItem("currentValue");
    if (maxValueStr && startValueStr && currentValueStr) {
      setMaxValue(JSON.parse(maxValueStr));
      setStartValue(JSON.parse(startValueStr));
      setCurrentValue(JSON.parse(currentValueStr));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("startValue", JSON.stringify(startValue));
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("currentValue", JSON.stringify(currentValue));
  }, [currentValue, maxValue, startValue]);

  const incButtonHandler = () => setCurrentValue(currentValue + 1);

  const resetButtonHandler = () => setCurrentValue(startValue);

  const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setMaxValue(Number(e.currentTarget.value));

  const inputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setStartValue(Number(e.currentTarget.value));

  const setButtonHandler = () => setCurrentValue(startValue);

  let disabledInkClass = currentValue === maxValue;

  let disabledResetClass = currentValue === startValue;

  let disabledSetClass = maxValue <= startValue || startValue < 0;

  return (
    <div>
      <Routes>
        <Route
          path={"/Counter/onepage"}
          element={
            <OnePage
              maxValue={maxValue}
              incButtonHandler={incButtonHandler}
              resetButtonHandler={resetButtonHandler}
              currentValue={currentValue}
              disabledInkClass={disabledInkClass}
              disabledResetClass={disabledResetClass}
            />
          }
        />

        <Route
          path={"/Counter/"}
          element={
            <TwoPage
              inputMaxValueHandler={inputMaxValueHandler}
              inputStartValueHandler={inputStartValueHandler}
              startValue={startValue}
              maxValue={maxValue}
              currentValue={currentValue}
              setButtonHandler={setButtonHandler}
              disabledSetClass={disabledSetClass}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
