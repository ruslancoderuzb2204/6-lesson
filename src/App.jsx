import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./slice/counterSlice";

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

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="flex justify-around container w-full mx-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-4">Counter: {counter}</h1>
          <div className="flex flex-col justify-center w-full gap-3 ">
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
              className={`px-4 py-2 ${
                !subs ? "bg-green-500" : "bg-slate-400"
              } text-white rounded hover:bg-green-600`}
              onClick={() => setSubs(!subs)}
            >
              {!subs ? "UnSubscribe" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
      <div className="my-auto">
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-4">Counter: {counter}</h1>
          <div className="flex flex-col justify-center w-full gap-3">
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
              className={`px-4 py-2 ${
                !subs1 ? "bg-green-500" : "bg-slate-400"
              } text-white rounded hover:bg-green-600`}
              onClick={() => setSubs1(!subs1)}
            >
              {!subs1 ? "UnSubscribe" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
