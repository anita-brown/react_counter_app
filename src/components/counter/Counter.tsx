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
    <main className="flex flex-col gap-4 w-[100%] justify-center items-center">
      <p className="text-center text-5xl lg:text-6xl font-bold text-white">{counter}</p>
      <div className="flex lg:gap-4 gap-2 justify-between mt-4">
        <button
          className="text-x lg:text-xl text-gray-800 lg:py-2 lg:px-4 py-2 px-2 rounded bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-lg shadow-sm hover:bg-gradient-to-l hover:from-yellow-500 hover:bg-yellow-300 font-semibold"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="text-x text-gray-800 lg:text-xl lg:py-2 lg:px-4 py-2 px-2 rounded bg-gradient-to-r from-blue-500 to-blue-200 rounded-lg shadow-sm hover:bg-gradient-to-l hover:from-blue-500 hover:bg-blue-300 font-semibold"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="text-x text-gray-800 lg:text-xl lg:py-2 lg:px-4 py-2 px-2 rounded bg-gradient-to-r from-red-600 to-red-200 rounded-lg shadow-sm hover:bg-gradient-to-l hover:from-red-500 hover:bg-red-300 font-semibold"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <input
        onKeyPress={(e: any) => {
          return e.key === "Enter" && handleInputChange(e);
        }}
        ref={inputRef}
        className="lg:w-[30rem] w-[16.8rem] h-[3rem] text-grey-500 mt-4 lg:mt-8 px-2 border-2 border-gray-300 rounded"
        type="number"
        name=""
        id=""
        placeholder="Input value and press enter..."
      />
    </main>
  );
};

export default Counter;
