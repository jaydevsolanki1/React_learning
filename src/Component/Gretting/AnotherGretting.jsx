import PropTypes from "prop-types";
// ---------------------- AnotherGreeting Component ----------------------
function AnotherGreeting(props) {
  const { ifloggin, loginUser, mode } = {
    ...AnotherGreeting.defaultProps,
    ...props,
  };

  const loginMessage = `Welcome to ${loginUser}`;
  const failedMessage = `Failed to login. Please try again. UserName: (${loginUser})`;

  const themeClass =
    mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

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
export default AnotherGreeting;