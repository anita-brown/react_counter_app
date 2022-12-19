import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CounterState } from "../../redux/features/counterSlice";
import { increment, decrement, reset } from "../../redux/features/counterSlice";

const Counter = () => {
  const counter = useSelector((state: CounterState) => state.counter.counter);
  const dispatch = useDispatch()
  return (
    <main>
      <p>{counter}</p>
      <div className="flex justify-between">
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}> Decrement</button>
      </div>
      <input placeholder="Enter input..." type="number" />
    </main>
  );
};

export default Counter;
