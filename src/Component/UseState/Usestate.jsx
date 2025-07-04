import React, { useState } from "react";

function UseState() {
  const [Name, setName] = useState("Guest");
  const [Age, setAge] = useState(0);
  const [Count, setCount] = useState(0);
  const [isEmp, setEmp] = useState(false);

  const handleGenerate = () => {
    setName("Jaydev");
    setAge(22);
    setEmp(true);
    console.log("Updated Name:", "Jaydev");
  };

  const increaseAge = () => {
    setAge((prevAge) => {
      const newAge = prevAge + 1;
      setEmp(newAge >= 20);
      return newAge;
    });
  };

  const DecreaseAge = () => {
    setAge((prevAge) => {
      const newAge = Math.max(prevAge - 1, 0); // Prevent negative age
      setEmp(newAge >= 20);
      return newAge;
    });
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className="text-center my-4">UseState</h1>

      <div className="container">
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Info Card */}
          <div className="col-12 col-md-4 d-flex">
            <div className="border rounded-3 p-4 shadow-sm w-100 h-100">
              <button className="btn btn-info mb-3 w-100" onClick={handleGenerate}>
                Generate
              </button>
              <hr />
              <p><strong>Name:</strong> {Name}</p>
              <p><strong>Age:</strong> +{Age}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-sm btn-success"
                  onClick={increaseAge}
                >
                  Increase Age
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={DecreaseAge}
                  disabled={Age === 0} // Disable button when age is 0
                >
                  Decrease Age
                </button>
              </div>
              <p className="mt-3"><strong>isEmp:</strong> {isEmp ? "Yes" : "No"}</p>
            </div>
          </div>

          {/* Counter Card */}
          <div className="col-12 col-md-6 d-flex">
            <div className="border rounded-3 p-4 shadow-sm w-100 h-100">
              <h3 className="text-center text-info border-bottom pb-2">
                Counter
              </h3>
              <div className="text-center display-5 my-3">{Count}</div>
              <div className="d-flex flex-column align-items-center gap-2">
                <button className="btn btn-danger w-50" onClick={decreaseCount}>
                  -
                </button>
                <button className="btn btn-secondary w-50" onClick={resetCount}>
                  Reset
                </button>
                <button className="btn btn-success w-50" onClick={increaseCount}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><hr /><br />
    </>
  );
}

export default UseState;
