import img from "../../assets/react.svg"; 


function Card() {
  const styles = {
    color: "black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "100px",
  };
  return (<>
    <div className="col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center d-flex flex-column align-items-center">
      <div className="card p-4 m-2 bg-light shadow-lg border border-light text-center" >
      <img
        src={img}
        className="img-fluid m-4"
        alt="React"
        style={{ height: "100px" }}
        />
      <h2>Card Component</h2>
      <p>This is a simple card component.</p>
      <a  href="/more" className="btn " style={styles}>More &gt;&gt;</a>
    </div>
    </div>
        </>
  );
}

export default Card;

