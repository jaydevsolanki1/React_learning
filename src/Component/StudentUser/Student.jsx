import PropTypes from "prop-types";

function Student(props) {
  const { user, age, gender, isfollowing } = {
    ...Student.defaultProps,
    ...props,
  };

  // console.log("Student props:", { user, age, gender, isfollowing });

  return (
    <>
      <div className=" bg-light p-3 m-2 text-start rounded-5 shadow-lg bg-light" style={{ minWidth: "300px" }}>
        <div > 
          {" "}
          <span>UserName : {user}</span>
          <br />
          <span>Age : {age}</span>
          <br />
          <span>Gender : {gender}</span>
          <br />
          <span>isfollowing : {isfollowing ? "yes" : "no"}</span>
          <br />
        </div>
      </div>
    </>
  );
}

Student.propTypes = {
  user: PropTypes.string,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string,
  isfollowing: PropTypes.bool,
};

Student.defaultProps = {
  user: "Guest",
  age: 0,
  gender: "Unspecified",
  isfollowing: false,
};
// __________________________________________________________
export function UserGretting(props) {
  const { isloggin, username } = { ...UserGretting.defaultProps, ...props };
  // console.log({ isloggin, username });

  return (
    <>
      <div className="p-3 m-2 text-start rounded-4 border bg-dark text-light">
        <span>UserName: {username}</span>
        <hr />
        <span>isLoggin: {isloggin ? "yes" : "no"}</span>
      </div>
    </>
  );
}
UserGretting.propTypes = {
  isloggin: PropTypes.bool,
  username: PropTypes.string,
};

UserGretting.defaultProps = {
  isloggin: false,
  username: "Guest",
};

export function AnotherGreeting(props) {
  const { ifloggin, loginUser } = { ...AnotherGreeting.defaultProps, ...props };

  const loginMessage = ` Welcome to ${loginUser}`;
  const failedMessage = ` Failed to login please try to again... UserName : (${loginUser})`;
  return (
    <>
      <div className="bg-light p-0 m-0 text-center  ">
        {ifloggin ? (
          <p className="bg-success p-2 text-white rounded-2">{loginMessage} </p>
        ) : (
          <p className="bg-danger p-2 text-white rounded-2">{failedMessage}</p>
        )}
      </div>
    </>
  );
}

AnotherGreeting.defaultProps = {
  ifloggin: false,
  loginUser: "Guest",
};

export default Student;
