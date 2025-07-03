import { useState } from "react";

function Button() {
  let count = 0;
  const PrimaryBtn = (name) => {
    if (count <= 3) {
      count++;
      console.log(`${name} clicked ${count} times`);
    } else {
      console.log(`${name} Stop Clicking Me`);
    }
  };
  const [cnt, setcnt] = useState(0);
  const DangerBtn = () => {
    if (cnt < 3) {
      setcnt(cnt + 1);
      console.log(`Count is  ${cnt + 1}`);
    } else {
      console.log("Not more Couting");
    }
  };
  const [showImg, setshow] = useState(false);
  const [diImg] = useState(false);

  const SecondaryBtn = (e) => (e.target.textContent = "ofuu....fuck !👺");
  const image_1 = "./Knight.png";

  const imgGen = (e) => {
    setshow(true);
  };
  const imgStyle = {
    width: "50px",
    maxWidth: "auto",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgb(0, 255, 200)",
    marginLeft: "10px",
    padding: "5px",
  };
  const hideimg = () => {
    setshow(false);
  };

  return (
    <>
      <hr />
      <div className="container d-flex flex-column align-items-center">
        <h1 className="text-center">Button</h1>
        <br />
        <div className="button-group d-flex flex-wrap ">
          <button
            className="m-1 border-dark  btn btn-primary"
            onClick={() => PrimaryBtn("Hello Bro")}
          >
            Primary
          </button>
          <button
            className="m-1 border-dark  btn btn-danger"
            onClick={DangerBtn}
            disabled={cnt >= 3}
          >
            Danger
            {/* when count is 3 automatic disabled button */}
          </button>
          <button
            className="m-1 border-dark  btn btn-secondary"
            onDoubleClick={(e) => SecondaryBtn(e)}
          >
            Secondary
            {/* This is button click and textcontent change */}
          </button>
          <button className="p-3 m-1 border-dark  btn btn-success">
            Success
          </button>
          <button className="p-3 m-1 border-dark  btn btn-warning">
            Warning
          </button>
          <button className="p-3 m-1 border-dark  btn btn-info">Info</button>
          <button className="p-3 m-1 border-dark  btn btn-light">Light</button>
          <button className="p-3 m-1 border-light  btn btn-dark">Dark</button>
          {/* <button className="m-1  btn btn-outline-info" onClick={(e)=>imgGen(e)}>Img</button> */}
          <button
            className="m-1 btn btn-outline-info"
            onClick={imgGen}
            onDoubleClick={hideimg}
          >
            img &gt;
          </button>
          {showImg && <img src={image_1} alt="Knight_Image" style={imgStyle} />}
          {/* ✅ Conditional image rendering */}
        </div>
      </div>
    </>
  );
}

export default Button;
