import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import "./counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        Số lượng:
        <button className="buttonPlus" onClick={() => dispatch(increment())}>
          +
        </button>
        <span className="valueCounter">{count.value}</span>
        <button className="buttonSub" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}
