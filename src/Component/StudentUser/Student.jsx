import PropTypes from "prop-types";

// ---------------------- Student Component ----------------------
function Student(props) {
  const { user, age, gender, isfollowing, mode } = {
    ...Student.defaultProps,
    ...props,
  };

  const themeClass = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className="row d-flex ">
      <div className={`d-flex flex-wrap col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ${themeClass} p-3 rounded-5 shadow-lg`} style={{ minWidth: "180px" }}>
        <div>
          <span>UserName: {user}</span>
          <br />
          <span>Age: {age}</span>
          <br />
          <span>Gender: {gender}</span>
          <br />
          <span>Following: {isfollowing ? "Yes" : "No"}</span>
        </div>
      </div>
    </div>
  );
}

Student.propTypes = {
  user: PropTypes.string,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string,
  isfollowing: PropTypes.bool,
  mode: PropTypes.string,
};

Student.defaultProps = {
  user: "Guest",
  age: 0,
  gender: "Unspecified",
  isfollowing: false,
  mode: "light",
};

// ---------------------- UserGretting Component ----------------------
export function UserGretting(props) {
  const { isloggin, username, mode } = {
    ...UserGretting.defaultProps,
    ...props,
  };

  const themeClass = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className={`col-12 col-md-6 mb-3 ${themeClass} p-3 text-start rounded-4 border m-1`}>
      <span>UserName: {username}</span>
      <hr />
      <span>Logged In: {isloggin ? "Yes" : "No"}</span>
    </div>
  );
}

UserGretting.propTypes = {
  isloggin: PropTypes.bool,
  username: PropTypes.string,
  mode: PropTypes.string,
};

UserGretting.defaultProps = {
  isloggin: false,
  username: "Guest",
  mode: "light",
};

// ---------------------- AnotherGreeting Component ----------------------
export function AnotherGreeting(props) {
  const { ifloggin, loginUser, mode } = {
    ...AnotherGreeting.defaultProps,
    ...props,
  };

  const loginMessage = `Welcome to ${loginUser}`;
  const failedMessage = `Failed to login. Please try again. UserName: (${loginUser})`;

  const themeClass = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className={`col-12 mb-3 ${themeClass} p-2 text-center rounded-3`}>
      {ifloggin ? (
        <p className="bg-success text-white p-2 rounded-2">{loginMessage}</p>
      ) : (
        <p className="bg-danger text-white p-2 rounded-2">{failedMessage}</p>
      )}
    </div>
  );
}

AnotherGreeting.propTypes = {
  ifloggin: PropTypes.bool,
  loginUser: PropTypes.string,
  mode: PropTypes.string,
};

AnotherGreeting.defaultProps = {
  ifloggin: false,
  loginUser: "Guest",
  mode: "light",
};

export default Student;
