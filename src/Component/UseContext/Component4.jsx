import React, { useContext } from "react";
import { UserContext } from "./Component1";

//! Props with component
// function Component4(props) {
//   return (
//     <div>
//       <p className="fs-3 border-2 border border-dark bg-light text-dark p-3 rounded pb-5 ">
//         Component4
//         <h3>Bye User : {props.user}</h3>
//       </p>
//     </div>
//   );
// }


//! useContext() hook with component
function Component4() {

const user = useContext(UserContext);

  return (
    <div>
      <div className="fs-3 border-2 border border-dark bg-light text-dark p-3 rounded pb-5 ">
        Component4
        <h3>Bye User : {`${user}`}</h3>
      </div>
    </div>
  );
}

export default Component4;
