import Card from "./Card";

function CardWrapper({ mode = "light" }) {
  const bgClass = mode === "dark" ? "bg-dark" : "bg-light";
  return (
    <>
      <div className={`container ${bgClass} py-4 rounded-4 d-`}>
        <h2 className="text-center fs-1 ">Cards</h2>
        <div className=" d-flex flex-wrap justify-content-center align-items-center ">

                    <Card mode={mode} />
                    <Card mode={mode} />
                    <Card mode={mode} />
                    <Card mode={mode} />
                    <Card mode={mode} />
                    <Card mode={mode} />
                    <Card mode={mode} />
                    <Card mode={mode} />
                
        </div>
      
      </div>
      <hr />
      <br />
    </>
  );
}

export default CardWrapper;
