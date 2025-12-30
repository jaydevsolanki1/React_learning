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
          {/* THIS IS DEFUALT USER DEATILS WHEN ANY NOT DETAILS PUT DOWN  */}
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



// import React from "react";
// import UserDetails from "./UserDetails";

// function UserDetailsWrap({ mode = "light" }) {
//   const themeClass = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

//   const users = [
//     {}, // default user (no props)
//     { user: "jaydev", age: 21, gender: "Male", isfollowing: true },
//     { user: "riya", age: 42, gender: "Female", isfollowing: true },
//     { user: "ram", age: 64, gender: "Male", isfollowing: false },
//     { user: "janvi", age: 23, gender: "Female", isfollowing: false },
//     { user: "shreya", age: 66, gender: "Female", isfollowing: true },
//     { user: "rahul", age: 22, gender: "Male", isfollowing: false },
//     { user: "suhani", age: 11, gender: "Female", isfollowing: true },
//   ];

//   return (
//     <div className={`py-4 ${themeClass}`}>
//       <h1 className="fs-1 text-center">Users Details</h1>
//       <div className="d-flex flex-wrap justify-content-center rounded-4 container-fluid">
//         {users.map((u, i) => (
//           <div className="p-3" key={i}>
//             <UserDetails {...u} mode={mode} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default UserDetailsWrap;
