import React, { useState, createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();

function Component1() {
  const [user, newUser] = useState("Ishushi code");
  return (
    <div>
      <div className="fs-3 border-2 border border-dark bg-light text-dark p-3 pb-5 rounded">
        Component1
        <h3>Hello User : {user}</h3>
        <UserContext.Provider value={user}>
          {/* wrap the Component 2 */}
          <Component2 user={user} />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default Component1;
