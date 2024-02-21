import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slice/counterSlice";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [subs, setSubs] = useState(false);
  const [subs1, setSubs1] = useState(false);

  const handleIncrement = () => {
    if (!subs) {
      dispatch(increment());
    }
  };

  const handleDecrement = () => {
    if (!subs) {
      dispatch(decrement());
    }
  };
  const handleIncrement1 = () => {
    if (!subs1) {
      dispatch(increment());
    }
  };

  const handleDecrement1 = () => {
    if (!subs1) {
      dispatch(decrement());
    }
  };

  return (
    <div className="flex justify-around container w-full mx-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-4xl font-bold mb-4">Counter: {counter}</h1>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDecrement}
          >
            -
          </button>
          <button
            className="px-4 block py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => setSubs(!subs)}
          >
            UnSubs
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-4xl font-bold mb-4">Counter: {counter}</h1>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleIncrement1}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDecrement1}
          >
            -
          </button>
          <button
            className="px-4 block py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => setSubs1(!subs1)}
          >
            UnSubs
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
