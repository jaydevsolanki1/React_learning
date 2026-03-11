import React, { useState, useEffect, useRef } from "react";

function UserRef() {
  const ref = useRef(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log(`Component Render `);
    // console.log(inputRef);
  });

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "lightgray";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "lightgray";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "lightgray";
  };

  return (
    <div>
      <header>
        <h1 className="text-center fs-1">Use Ref()</h1>
      </header>
      <br />
      <section className="container gap-4 d-flex align-item-center justify-content-center">
        <button className="btn btn-primary fs-5" onClick={handleClick1}>
          Click me !{" "}
        </button>
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={inputRef1}
          className="border border-dark rounded w-25 p-2"
          placeholder="Type Anything... "
        />
      </section>
      <br />
      <section className="container gap-4 d-flex align-item-center justify-content-center">
        <button className="btn btn-primary fs-5" onClick={handleClick2}>
          Click me !{" "}
        </button>
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={inputRef2}
          className="border border-dark rounded w-25 p-2"
          placeholder="Type Anything... "
        />
      </section>
      <br />
      <section className="container gap-4 d-flex align-item-center justify-content-center">
        <button className="btn btn-primary fs-5" onClick={handleClick3}>
          Click me !{" "}
        </button>
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={inputRef3}
          className="border border-dark rounded w-25 p-2 "
          placeholder="Type Anything... "
        />
      </section>
      <br />
      <hr />
    </div>
  );
}

export default UserRef;

//! feat: demonstrate useRef for focusing and highlighting multiple input fields

//^ - Implemented three input fields with individual refs
//^ - Buttons programmatically focus corresponding inputs
//^ - Active input highlighted with background color
//^ - Demonstrates difference between useRef and useState
//^ - Added console log in useEffect to observe component renders

// ---------------------------------------------------------------------------------------------------------------------

//LINE:4  let [number, setNumber] = useState(0); ** This way of use state
//LINE:7   console.log(ref);
//LINE:13  check only use effect its work or not.  // document.title = `count: ${number}`;
//LINE:17  setNumber((prev) => prev + 1);  ** this is use of use state  // ref.current++; // console.log(ref.current);
//LINE:30 {`count : ${number}`}  this is also part of use state*/

// ----------------------------------------------------------------------------------------------------------------------

// useState() : Re-Render the component when the state values changes.

// useRef() : "use References " does not re render when its values changes .
//              when you want a component a "remember" some information.
//              but you don't want that information to trigger new render.

// & 1. Accessing/ Interacting with Dom elements
// & 2. Handling Focus, Animations and Transitions
// & 3. Managing timer and Intervals

// ^ It is mainly used for:

// Accessing DOM elements (input, button, etc.)
// Storing values that should persist between renders

//* Examples:

// Focus input      // Store timer ID       // Store previous value     // Access DOM element
