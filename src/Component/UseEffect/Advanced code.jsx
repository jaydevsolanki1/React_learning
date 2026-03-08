

//! 📝 Mini Notes / Cheat Sheet

//? useState → Store values (count, color, width, height)

//^ useEffect [] → Runs once (Mount)

//? useEffect [deps] → Runs when dependencies change (Update)

//^ Cleanup → return () => removeEventListener() (Unmount)

//? Window Resize → Update width/height dynamically

//^ Random Color → Generate hex code, update background

//? Counter → Increment / Decrement / Reset


//   // ------------------------
//   //! Updated  Advanced Code
//   // ------------------------

// import React, { useState, useEffect } from "react";

// function Use_Effect() {
//   // ------------------------
//   // State Variables
//   // ------------------------
//   const [count, setCount] = useState(0); // Counter value
//   const [color, setColor] = useState("#ffffff"); // Random color
//   const [width, setWidth] = useState(window.innerWidth); // Window width
//   const [height, setHeight] = useState(window.innerHeight); // Window height

//   // ------------------------
//   // Update document title when width or height changes
//   // ------------------------
//   useEffect(() => {
//     document.title = `${width} x ${height}`; // Show current size in tab
//   }, [width, height]); // Dependency array → run only when width or height changes

//   // ------------------------
//   // Add window resize event listener (Mount) and remove it (Unmount)
//   // ------------------------
//   useEffect(() => {
//     function handelResize() {
//       setWidth(window.innerWidth); // Update width
//       setHeight(window.innerHeight); // Update height
//     }

//     window.addEventListener("resize", handelResize); // Listen to window resize
//     console.log("Event listener added"); // Debug log

//     return () => {
//       window.removeEventListener("resize", handelResize); // Cleanup on unmount
//       console.log("Event listener removed"); // Debug log
//     };
//   }, []); // Empty array → run only once (Mount)

//   // ------------------------
//   // Random color generator
//   // ------------------------
//   const ChangeColor = () => {
//     const randomColor =
//       "#" +
//       Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, "0"); // Generate hex color
//     setColor(randomColor); // Update state
//   };

//   // ------------------------
//   // Counter functions
//   // ------------------------
//   const AddCount = () => setCount((count) => count + 1); // Increment
//   const DecreaseCount = () => setCount((count) => count - 1); // Decrement
//   const ResetCount = () => setCount(0); // Reset counter

//   // ------------------------
//   // JSX (UI)
//   // ------------------------
//   return (
//     <div className="container">

//       {/* Title */}
//       <div className="raw">
//         <h1 className="col text-center">Use Effect</h1>

//         {/* Counter Section */}
//         <div className="col">
//           <h4>Counter Using useEffect()</h4>
//           <div className="d-flex justify-content-center gap-3 p-2">
//             <span className="border border-dark bg-light text-dark rounded p-2">
//               Count : {count}
//             </span>
//             <span className="btn btn-success p-2" onClick={AddCount}>+</span>
//             <span className="btn btn-danger p-2" onClick={ResetCount}>Reset</span>
//             <span className="btn btn-success p-2" onClick={DecreaseCount}>-</span>
//           </div>

//           <hr />

//           {/* Color Section */}
//           <h4>Change Color Using useEffect()</h4>
//           <div className="d-flex justify-content-center gap-3 p-2">
//             <span
//               className="border border-dark text-center fs-5 rounded p-2 text-dark w-25"
//               style={{ background: color }}
//             >
//               Color : {color}
//             </span>
//             <button className="btn bg-primary p-2" onClick={ChangeColor}>
//               Change Color
//             </button>
//           </div>
//         </div>
//       </div>

//       <hr />

//       {/* Window size section */}
//       <div className="col">
//         <h4>Change Height & Width Using useEffect()</h4>
//         <div className="d-flex justify-content-center gap-3 p-2">
//           <span className="border bg-light border-dark text-center fs-3 rounded p-2 text-dark w-25">
//             Width : {width}
//           </span>
//           <span className="border bg-light border-dark text-center fs-3 rounded p-2 text-dark w-25">
//             Height : {height}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Use_Effect;