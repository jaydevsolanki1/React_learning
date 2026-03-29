import axios from "axios";
import React, { useEffect, useState } from "react";
import MainHooks from "./MainHooks";
import UserHooks from "./UserHooks";

function CustomHooks() {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center">Custom Hooks</h1>
        </div>
        <p>👉 A custom hook = your own reusable logic using hooks</p>
        <p>👉 Custom hook = Extract repeated logic → reuse anywhere</p>
        <ul>
          <h5>🎯 When to use? & When you repeat:</h5>
          <li>API logic</li>
          <li>form logic</li>
          <li>event logic</li>
        </ul>
        <br />
        <div>
          <p>
            {" "}
            <i>
              ----------------&gt; Main Custom Hooks check on my code MainHooks
              page
            </i>
          </p>
        </div>
        <hr />
        <br />
        <div>
          <UserHooks />
        </div>
        <br />
      </div>
      <hr />
    </>
  );
}

export default CustomHooks;

// ✅ 1. Create Custom Hook

//! 📁 useToggle.js

// import { useState } from "react";

// function useToggle(initialValue = false) {
//   const [value, setValue] = useState(initialValue);

//   const toggle = () => {
//     setValue((prev) => !prev);
//   };

//   return [value, toggle];
// }

// export default useToggle;

// ------------------------------------------------------------------------------
// ✅ 2. Use in Component
// import React from "react";
// import useToggle from "./useToggle";

// function ToggleExample() {
//   const [isVisible, toggleVisible] = useToggle();

//   return (
//     <div>
//       <button onClick={toggleVisible}>
//         {isVisible ? "Hide" : "Show"}
//       </button>

//       {isVisible && <h2>Hello 👋 I am visible!</h2>}
//     </div>
//   );
// }

// export default ToggleExample;

// --------------------------------------------------------------------------------------------------->1st examples

//! 🔷 Example: useInput (Form handling)
// import { useState } from "react";

// function useInput(initialValue = "") {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const reset = () => {
//     setValue("");
//   };

//   return { value, onChange: handleChange, reset };
// }

// export default useInput;

// ------------------------------------------------------------------------------
// Usage:

// import React from "react";
// import useInput from "./useInput";

// function FormExample() {
//   const name = useInput("");

//   return (
//     <div>
//       <input type="text" {...name} placeholder="Enter name" />
//       <button onClick={name.reset}>Reset</button>

//       <h3>{name.value}</h3>
//     </div>
//   );
// }

// export default FormExample;
// --------------------------------------------------------------------------------------------------->2nd examples

// ? Next Level Hooks (you should try next)

// useLocalStorage (save data in browser)
// useDebounce (search optimization)
// useWindowSize (responsive UI)
