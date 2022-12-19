import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CounterState } from "../../redux/features/counterSlice";
import { increment, decrement, incrementBy, reset } from "../../redux/features/counterSlice";

const Counter = () => {
  const counter = useSelector((state: CounterState) => state.counter.counter);
  const dispatch = useDispatch();
  const inputRef: any = useRef(null);
  const handleInputChange = (e: any) => {
    let inputValue = inputRef.current.value;
    if (inputValue !== "") {
      dispatch(incrementBy(parseInt(inputValue)));
   
    }

  };
  return (
    <main>
      <p className="text-center text-4xl font-bold">{counter}</p>
      <div className="flex justify-between mt-4">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}> Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <input onKeyPress={(e: any) => {
        return e.key === "Enter" && handleInputChange(e)
      }} ref={inputRef} className="lg:w-[30rem] w-[15rem] h-[3rem] text-grey-500 mt-4 px-2 border-2 border-orange-400" type="number" name="" id="" placeholder="Input value and press enter..." />
    </main>
  );
};

export default Counter;
