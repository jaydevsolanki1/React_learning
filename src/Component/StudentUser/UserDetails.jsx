import PropTypes from "prop-types";

// ---------------------- UserDetails Component ----------------------
function UserDetails(props) {
  const { user, age, gender, isfollowing, mode } = {
    ...UserDetails.defaultProps,
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

UserDetails.propTypes = {
  user: PropTypes.string,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string,
  isfollowing: PropTypes.bool,
  mode: PropTypes.string,
};

UserDetails.defaultProps = {
  user: "Guest",
  age: 0,
  gender: "Unspecified",
  isfollowing: false,
  mode: "light",
};

export default UserDetails;
