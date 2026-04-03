import React, { useReducer, useState } from "react";

const UseReducer = () => {
  const initializeState = 0;

  const Reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        // return (state = 0);
        return initializeState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(Reducer, initializeState);
  return (
    <div className="m-3 ">
      <h1 className="text-center">Use Reducer </h1>
      <div className="d-flex gap-2 ">
        <p>count : {count}</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch("increment")}
        >
          increment
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch("decrement")}
        >
          decrement
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch("reset")}
        >
          reset
        </button>
        <hr />
      </div>
      <hr />
      <p>useState Simple state useReducer Complex logic / many actions</p>
      <div></div>
    </div>
  );
};

export default UseReducer;
