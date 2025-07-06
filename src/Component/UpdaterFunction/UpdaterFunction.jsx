import React, { useState } from "react";

function UpdaterFunction() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Reset = () => {
    setCount(0); // no need for function here
  };

  const Decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Updater Function</h1>
        <div className="d-flex gap-5 align-items-center">
          <span className="fs-4">Counter:</span>
          <span className="fs-3">{count}</span>

          <button
            onClick={Increment}
            className="btn border-1 btn-outline-danger"
          >
            {" "}
            +
          </button>
          <button onClick={Reset} className="btn  border-1 btn-outline-success">
            {" "}
            Reset
          </button>
          <button
            onClick={Decrement}
            className="btn  border-1 btn-outline-warning"
          >
            {" "}
            -
          </button>
          <span>
            // this is the UpdaterFunction use the rename & update any function
            using function...
          </span>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default UpdaterFunction;
