import React, { useState, useEffect } from "react";

function Use_Effect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // document.title = `count : ${count} , color : ${color}`;
    // document.title = `${width} x ${height}`;
  }, [count, color, width, height]);

  useEffect(() => {
    window.addEventListener("resize", handelResize);
    console.log("Event listener added");
    return () => {
      window.removeEventListener("resize", handelResize);
      console.log("Event listener removed");
    };
  }, [width, height]);

  function handelResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  //--->> Random color <<----
  const ChangeColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setColor(randomColor);
  };

  // Check the title in your browser to see if it is working.
  // When we use [] (empty dependency array) in useEffect,
  // it means the effect runs only once when the component first renders (mounts).
  // when [value] its means when change only those time is render only part of those not fully

  const AddCount = () => {
    setCount((count) => count + 1);
  };
  const DecreaseCount = () => {
    setCount((count) => count - 1);
  };
  const ResetCount = () => {
    // setCount((count) => (count = 0));
    setCount(0);
  };

  return (
    <div>
      <div className="container my-4">
        <h1 className="text-center mb-4">Use Effect Demo</h1>

        {/* Counter Section */}
        <section className="mb-5">
          <h4 className="mb-3">Counter</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <span className="border border-dark bg-light text-dark rounded p-2">
              Count : {count}
            </span>
            <button className="btn btn-success" onClick={AddCount}>
              +
            </button>
            <button className="btn btn-danger" onClick={ResetCount}>
              Reset
            </button>
            <button className="btn btn-warning" onClick={DecreaseCount}>
              -
            </button>
          </div>
        </section>

        {/* Color Section */}
        <section className="mb-5">
          <h4 className="mb-3">Random Color</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center">
            <span
              className="border text-center rounded p-2 w-25 text-dark"
              style={{ background: color }}
            >
              Color : {color}
            </span>
            <button className="btn btn-primary" onClick={ChangeColor}>
              Change Color
            </button>
          </div>
        </section>

        {/* Window Size Section */}
        <section>
          <h4 className="mb-3">Window Size</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <span className="border bg-light text-dark text-center rounded p-2 w-25">
              Width : {width}px
            </span>
            <span className="border bg-light text-dark text-center rounded p-2 w-25">
              Height : {height}px
            </span>
          </div>
        </section>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Use_Effect;
