import React from "react";
import CustomHooksA from "./CustomHooksA";

function AsyncAwait() {
  const { data, loading, error } = CustomHooksA(
    "https://jsonplaceholder.typicode.com/users",
  );
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error: {error}</h3>;
  }
  return (
    <>
      <div>
        <h1 className="text-center">Async / Await </h1>
        <br />
        <div className="border p-4 m-4">
          {/* {data.slice(0, 5).map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })} */}
          {data.slice(0, 5).map((user) => (
            <p key={user.id}>
              {user.name} &nbsp;- {user.email}
            </p>
          ))}
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default AsyncAwait;

//^ Old Way
// useEffect(() => {
//   axios.get(url).then((res) => {
//     setUsers(res.data);
//   });
// }, []);

//? Options code
//   {loading ? (
//         <h3>Loading...</h3>
//       ) : error ? (
//         <h3 style={{ color: "red" }}>Error: {error}</h3>
//       ) : (
//         data.slice(0, 5).map((user) => (
//           <p key={user.id}>
//             {user.name} - {user.email}
//           </p>
//         ))
//   )}
