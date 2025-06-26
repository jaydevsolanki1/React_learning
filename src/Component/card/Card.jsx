// import img from "../../assets/react.svg";

function Card({ mode = "light" }) {
  const themeClass = mode === "dark"
    ? "card p-4 m-2 bg-dark text-light shadow-lg border border-light text-center"
    : "card p-4 m-2 bg-light shadow-lg border border-light text-center";
  const styles = {
    color: mode === "dark" ? "white" : "black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "100px",
  };
  return (
    <div className="col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center flex-column align-items-center">
      <div className={themeClass}>
        <img
          src='/React_logo.png' // Replace with the correct path to your image
          className="img-fluid m-4"
          alt="React"
        />
        <h2>Card Component</h2>
        <p>This is a simple card component.</p>
        <a href="/more" className="btn" style={styles}>More &gt;&gt;</a>
      </div>
    </div>
  );
}

export default Card;

