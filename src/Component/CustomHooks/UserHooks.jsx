import React, { useState } from "react";
import MainHooks from "./MainHooks";

function UserHooks() {
  const { data, loading, error } = MainHooks(
    "https://jsonplaceholder.typicode.com/users",
  );
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <div className="container border border-2">
        <h3>Data fetch using axios and using "Custom hooks"</h3>
        <hr />
        {data.slice(0, 4).map((user) => (
          <p key={user.id}> {user.name}</p>
        ))}
      </div>
    </>
  );
}

export default UserHooks;
