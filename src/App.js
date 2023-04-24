import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  applyMemory,
  addMemory,
  clearMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const handleAddOne = () => {
  //   dispatch(addOne());
  // };
  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  };
  const changingOperation = (operation) => {
    dispatch(changeOperation(operation));
  };
  const clearAll = () => {
    dispatch(clearDisplay());
  };
  const handleApplyMemory = () => {
    dispatch(applyMemory());
  };
  const handleAddMemory = () => {
    dispatch(addMemory());
  };
  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemory} />
              <CalcButton value={"MR"} onClick={handleApplyMemory} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumber(2)} />
              <CalcButton value={3} onClick={() => handleApplyNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)} />
              <CalcButton value={5} onClick={() => handleApplyNumber(5)} />
              <CalcButton value={6} onClick={() => handleApplyNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)} />
              <CalcButton value={8} onClick={() => handleApplyNumber(8)} />
              <CalcButton value={9} onClick={() => handleApplyNumber(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changingOperation("+")} />
              <CalcButton value={"*"} onClick={() => changingOperation("*")} />
              <CalcButton value={"-"} onClick={() => changingOperation("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearAll} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
