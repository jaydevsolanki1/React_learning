import React, { useContext } from "react";
import Component4 from "./Component4";
import { UserContext } from "./Component1";

//! Props with component
// function Component3(props) {
//   return (
//     <div>
//       <p className="fs-3 border-2 border border-dark bg-light text-dark p-3 pb-5 rounded">
//         Component3
//         <Component4  user={props.user}/>
//       </p>
//     </div>
//   )
// }

//! useContext() hook with component
function Component3() {
  const user = useContext(UserContext);
  return (
    <div>
      <div className="fs-3 border-2 border border-dark bg-light text-dark p-3 pb-5 rounded">
        Component3
        {/* <h2>C-3 {`user :${user}`}</h2> */}
        <Component4 />
      </div>
    </div>
  );
}

export default Component3;
