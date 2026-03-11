import React, { useEffect, useRef, useState } from "react";

function AddLapCode() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startPause = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
      startTimeRef.current = Date.now() - elapsedTime;
    }
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  const formatTime = () => {
    const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((elapsedTime / 60000) % 60)).padStart(
      2,
      "0",
    );
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(
      2,
      "0",
    );
    const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(
      2,
      "0",
    );

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="container text-center">
      <br />
      <hr />
      <h1 className="mt-4">Stop Watch in Add lap</h1>

      <div className="border border-warning rounded p-4 mt-3 shadow">
        <h2 className={isRunning ? "text-success" : ""}>{formatTime()}</h2>

        <div className="mt-3">
          <button
            onClick={startPause}
            className={`btn ${isRunning ? "btn-warning" : "btn-success"} m-1`}
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button onClick={addLap} className="btn btn-warning m-1">
            Lap
          </button>

          <button onClick={addLap} className="btn btn-danger m-1">
            Stop
          </button>

          <button onClick={reset} className="btn btn-primary m-1">
            Reset
          </button>
        </div>
      </div>

      {/* Lap List */}

      <div className="mt-4">
        {laps.length > 0 && <h4>Lap Times</h4>}

        <ul className="list-group fw-2">
          {laps.map((lap, index) => (
            <li key={index} className="list-group-item border border-dark m-1 fw-normal">
              Lap {index + 1} : {lap}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddLapCode;
