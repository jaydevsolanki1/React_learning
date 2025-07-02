import React from "react";
import UserDetails from "./UserDetails";

function UserDetailsWrap({ mode = "light" }) {
  const themeClass =
    mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className={`py-4 ${themeClass}`}>
      <h1 className="fs-1 text-center">Users Details</h1>
      <div className="d-flex flex-wrap justify-content-center rounded-4 container-fluid">
        <span className="p-3">
          <UserDetails mode={mode} />
        </span>
        <span className="p-3">
          <UserDetails
            user="jaydev"
            age={21}
            gender="Male"
            isfollowing={true}
            mode={mode}
          />
        </span>
        <span className="p-3">
          <UserDetails
            user="riya"
            age={42}
            gender="Female"
            isfollowing={true}
            mode={mode}
          />
        </span>
        <span className="p-3">
          <UserDetails
            user="ram"
            age={64}
            gender="Male"
            isfollowing={false}
            mode={mode}
          />
        </span>
        <span className="p-3">
          <UserDetails
            user="janvi"
            age={23}
            gender="Female"
            isfollowing={false}
            mode={mode}
          />
        </span>
        <span className="p-3">
          <UserDetails
            user="shreya"
            age={66}
            gender="Female"
            isfollowing={true}
            mode={mode}
          />
        </span>
        <span className="p-3">
          <UserDetails
            user="rahul"
            age={22}
            gender="Male"
            isfollowing={false}
            mode={mode}
          />
        </span>
        <span className="p-3">
          <UserDetails
            user="suhani"
            age={11}
            gender="Female"
            isfollowing={true}
            mode={mode}
          />
        </span>
      </div>
    </div>
  );
}

export default UserDetailsWrap;
