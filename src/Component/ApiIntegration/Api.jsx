import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Api() {
  // ----------------------------------------first normal api using
  const [user, setUser] = useState([]);
  // ----------------------------------------second is api + loading + Error handling
  const [user2, setUser2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // ---------------------------------------------------------first example
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  // ---------------------------------------------------------second example
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUser2(data);
        setLoading(false);
        // setLoading(true); ------when loading
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        // setLoading(true);------when loading
      });
  }, []);
  return (
    <div>
      <br />
      <hr />
      <div className="container">
        <h1 className="text-center">Api Integration </h1>
        <br />
        <p>API = a way to get data from server</p>
        <h3>Examples</h3>
        <ul className="d-flex gap-5 border border-3">
          <li>UserList</li>
          <li>Products</li>
          <li>Weather data</li>
        </ul>
        <hr />
        <h2>Users List</h2>
        {user.slice(0, 3).map((user) => (
          <p key={user.id}>
            {/* {user.address.city}  */} {user.name} - {user.email}
          </p>
        ))}
        <hr />
        <h2>Users List </h2>
        <p>Loading + ErrorHandling</p>
        <div className="p-3 border-2 border">
          {user2.slice(5, 9).map((user2) => (
            <p key={user2.id}>
              {/* {user.address.city}  */} {user2.name} - {user2.email}
            </p>
          ))}
        </div>
        <hr />
        <div className="p-3 border-2 border">
          <div className="p-3 border-2 border">
            {loading && <h3>Loading...</h3>}

            {error && <h3 style={{ color: "red" }}>Error: {error}</h3>}

            {!loading && !error && user2.length === 0 && <h3>No data found</h3>}

            {!loading &&
              !error &&
              user2.length > 0 &&
              user2.slice(5, 9).map((user) => (
                <p key={user.id}>
                  {user.name} - {user.email}
                </p>
              ))}
          </div>
          <p className="text-danger">
            ERROR SHOW WHEN CODE IS INCORRECT : TRY THIS API CHANGE OR WRONG API
          </p>
          <ul>
            <li>👉 “Error showing” = API failed (normal)</li>
            <li>👉 “No data showing” = empty array (need fallback)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Api;

// Code when better way to uses array method use slice
//!alternate code
//         {users.filter((_, index) => index < 3).map((user) => (
// <p key={user.id}>{user.name}</p>
// ))}
