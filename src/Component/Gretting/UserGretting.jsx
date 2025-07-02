import PropTypes from "prop-types";
// ---------------------- UserGretting Component ----------------------
function UserGretting(props) {
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
export default UserGretting;