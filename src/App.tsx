import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import OnePage from "./OnePage/OnePage";

import TwoPage from "./TwoPage/TwoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/Counter/onepage"} element={<OnePage />} />

        <Route path={"/Counter/"} element={<TwoPage />} />
      </Routes>
    </div>
  );
}

export default App;
