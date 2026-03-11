import React, { useContext } from "react";
import Component3 from "./Component3";
import { UserContext } from "./Component1";

//! Props with component
// function Component2(props) {
//   return (
//     <div>
//       <p className="fs-3 border-2 border border-dark bg-light text-dark p-3 pb-5    rounded">
//         Component2
//         <Component3 user={props.user}/>
//       </p>
//     </div>
//   );
// }

//! useContext() hook with component
function Component2() {
  const user = useContext(UserContext);
  return (
    <div>
      <div className="fs-3 border-2 border border-dark bg-light text-dark p-3 pb-5    rounded">
        Component2
        {/* <h2>{`Hello from component2 by the : ${user}`}</h2> */}
        <Component3 />
      </div>
    </div>
  );
}

export default Component2;
