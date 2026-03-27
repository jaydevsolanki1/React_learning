import React from "react";
import { Link } from "react-router-dom"; // ✅ IMPORTANT
// import { Link } from "node:fs";

function Routing() {
  return (
    <div className="container">
      <hr />

      <h1 className="text-center">Routing</h1>
      <nav className=" d-flex gap-5">
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <hr />
    </div>
  );
}

export default Routing;
