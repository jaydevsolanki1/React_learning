import React, { useState } from "react";

function UpdaterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="container py-4">
        <h1 className="text-center mb-4">Updater Function</h1>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-4">
          <div className="d-flex align-items-center gap-2">
            <span className="fs-4">Counter:</span>
            <span className="fs-3 fw-bold">{count}</span>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button onClick={increment} className="btn btn-outline-danger">
              +
            </button>

            <button onClick={reset} className="btn btn-outline-success">
              Reset
            </button>

            <button onClick={decrement} className="btn btn-outline-warning">
              -
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <p
          className="text-center text-muted mx-auto"
          style={{
            maxWidth: "700px",
            lineHeight: "1.8",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          This example demonstrates the React <strong>Updater Function</strong>.
          <br />
          The <code>setCount((prev) =&gt; prev + 1)</code> syntax uses the
          previous state to safely update the current state.
        </p>
      </div>
      <hr />
    </>
  );
}

export default UpdaterFunction;
