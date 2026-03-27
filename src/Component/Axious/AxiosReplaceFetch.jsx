import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosReplaceFetch() {
  const [users, setUser] = useState([]);
  const [users2, setUser2] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUser(res.data);
    });
  }, []);
  useEffect(() => {
    setError(null);
    setLoading(false);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser2(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <br />
      <hr />
      <div className="container">
        <h1 className="text-center">Axios</h1>
        <br />
        <p>Axios is a library used to make API requests (better than fetch)</p>
        <h3>Fetch vs Axios</h3>
        <ul>
          <li>fetch : res.json() &nbsp; &nbsp; &nbsp; Axios : res.data</li>
          <li>
            fetch : res.json() &nbsp; &nbsp; &nbsp; Axios : res.data manual
            error built-in more code less code
          </li>
          <li>
            fetch : res.json() &nbsp; &nbsp; &nbsp; Axios : res.data manual
            error built-in more code less code
          </li>
        </ul>
      </div>
      <div className=" border-2 border m-3 p-3">
        <h2 className="text-warning">This is Axios Data with simple use</h2>
        <br />
        {users.slice(0, 4).map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      <div className=" border-2 border m-3 p-3">
        <h2 className="text-warning">
          This is Axios Data with loading and error
        </h2>
        <br />
        {error && <h3 style={{ color: "red" }}>Error: {error}</h3>}
        {loading && <h3>Loading: </h3>}
        {!loading &&
          !error &&
          users2.slice(4, 6).map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
      <h4 className="text-danger text-center">
        Axios replace fetch and when use so please install in npm{" "}
      </h4>
      <br />
      <hr />
    </div>
  );
}

export default AxiosReplaceFetch;

//!Addition Advanced code
//  {
//   loading ? (
//     <h3>Loading...</h3>
//   ) : error ? (
//     <h3 style={{ color: "red" }}>Error: {error}</h3>
//   ) : (
//     users2.slice(4, 6).map((user) => (
//       <p key={user.id}>{user.name}</p>
//     ))
//   );
// }
