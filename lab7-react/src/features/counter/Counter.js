import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export const Counter = () => {
  // Import state
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  // checking number or not, if it is not a number set the value to zero
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            console.log("abc");
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            console.log("def");
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={() => resetAll()}>Reset</button>
      </div>
    </section>
  );
};
