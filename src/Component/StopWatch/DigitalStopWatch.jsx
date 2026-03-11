import React, { useEffect, useRef, useState } from "react";

function DigitalStopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    // console.log(startTimeRef.current);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");

    //! Better Version of code and Reduced Code
    // const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
    // const minutes = String(Math.floor((elapsedTime / 60000) % 60)).padStart(2, "0");
    // const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0");
    // const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, "0");

    return ` ${hours}:   ${min}:    ${sec}: ${milliSeconds} `;
  };

  return (
    <div className="container-fluid">
      <div>
        <h1 className="fs-1 text-center">Stop Watch</h1>
        <br />
      </div>

      <section className="  col-sm-12 d-flex justify-content-center m-1 p-1 ">
        <div className="border-3 border border-warning col-sm-3  rounded p-3 ">
          <p className=" text-center fs-1">{formatTime()}</p>
          <div className="d-flex justify-content-center gap-1 ">
            <button onClick={start} className="btn btn-success btn-sm m-1 p-2">
              Start
            </button>
            <button onClick={stop} className="btn btn-danger btn-sm  m-1 p-2">
              Stop
            </button>
            <button onClick={reset} className="btn btn-primary btn-sm  m-1 p-2">
              Reset
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalStopWatch;

//! Component Flow

// User clicks Start
//         ↓
// isRunning = true
//         ↓
// useEffect starts interval
//         ↓
// elapsedTime updates every 10ms
//         ↓
// Component re-renders
//         ↓
// formatTime() updates display

//! Another Component Flow

// Start Button
//       ↓
// setIsRunning(true)
//       ↓
// useEffect runs
//       ↓
// setInterval updates elapsedTime
//       ↓
// React re-renders
//       ↓
// formatTime() updates display
