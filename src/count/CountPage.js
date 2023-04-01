import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CountPage() {
  const [firstValue, setFirstValue] = useState("");
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state);

  const changeInputFirst = (e) => {
    setFirstValue(e.target.value);
    dispatch({
      type: "FIRST_VALUE",
      payload: +e.target.value,
    });
  };

  const changeInputSecond = (e) => {
    dispatch({
      type: "SECOND_VALUE",
      payload: +e.target.value,
    });
  };

  const plus = () => {
    dispatch({
      type: "PLUS",
    });
  };

  const minus = () => {
    dispatch({
      type: "MINUS",
    });
  };

  const multiply = () => {
    dispatch({
      type: "MULTIPLY",
    });
  };

  const divide = () => {
    dispatch({
      type: "DIVIDE",
    });
  };

  return (
    <div className="count">
      <h1>Counter</h1>
      <div className="input">
        <input onChange={changeInputFirst} type="number" placeholder="0" />
        <p className="error-message">{!firstValue ? "поле пусто" : ""}</p>
      </div>
      <div className="input">
        <input onChange={changeInputSecond} type="number" placeholder="0" />
        <p className="error-message">{!firstValue  ? "поле пусто" : ""}</p>
      </div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <p>{result}</p>
    </div>
  );
}
