import Card from "./Card";

function CardWrapper() {
  return (
    <>
      <div className="container">
        <h2 className="text-center fs-1">Cards</h2>
        <div className="d-flex flex-wrap justify-content-center mb-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <hr />
      <br />
    </>
  );
}

export default CardWrapper;
