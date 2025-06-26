import React from "react";
import Student, { UserGretting, AnotherGreeting } from "./Student";

function UserDetails({ mode = "light" }) {
  const themeClass = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className={`py-4 ${themeClass}`}>
      <h1 className="fs-1 text-center">Users Details</h1>
      <div className="d-flex flex-wrap justify-content-center rounded-4 container-fluid">
        <span className="p-3">
          <Student mode={mode} />
        </span>
        <span className="p-3">
          <Student user="jaydev" age={21} gender="Male" isfollowing={true} mode={mode} />
        </span>
        <span className="p-3">
          <Student user="riya" age={42} gender="Female" isfollowing={true} mode={mode} />
        </span>
        <span className="p-3">
          <Student user="ram" age={64} gender="Male" isfollowing={false} mode={mode} />
        </span>
        <span className="p-3">
          <Student user="janvi" age={23} gender="Female" isfollowing={false} mode={mode} />
        </span>
        <span className="p-3">
          <Student user="shreya" age={66} gender="Female" isfollowing={true} mode={mode} />
        </span>
        <span className="p-3">
          <Student user="rahul" age={22} gender="Male" isfollowing={false} mode={mode} />
        </span>
        <span className="p-3">
          <Student user="suhani" age={11} gender="Female" isfollowing={true} mode={mode} />
        </span>
      </div>

      <hr />
      <h1 className="fs-1 text-center">Greeting</h1>
      <div className="d-flex flex-wrap justify-content-evenly rounded-4 container-fluid p-1">
        <div className="col-12 col-md-5 col-lg-6 d-flex flex-column justify-content-start mt-3">
          <h2 className="text-center fs-4">Users</h2>
          <hr />
          <div className="d-flex flex-wrap justify-content-center rounded-4 p-1">
            <UserGretting isloggin={true} username="ramji" mode={mode} />
            <UserGretting mode={mode} />
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center mt-3">
          <h2 className="text-center fs-4">Check Login</h2>
          <hr />
          <div className="col-12">
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting loginUser="jaydev" ifloggin={true} mode={mode} />
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting loginUser="kalu" ifloggin={false} mode={mode} />
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting mode={mode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
