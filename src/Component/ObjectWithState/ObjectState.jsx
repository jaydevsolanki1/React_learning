import React, { useState } from "react";

function ObjectState() {
  const [car, setCar] = useState({
    Model: 123,
    Color: "Red",
    Company: "Toyota",
    Year: 2020,
  });
  //   const HandelCompany = (event) => {
  //     setCar({ ...car, Company: event.target.value });
  //   };

  //   const HandelColor = (event) => {
  //     setCar({ ...car, Color: event.target.value });
  //   };

  //   const HandelYear = (event) => {
  //     setCar({ ...car, Year: event.target.value });
  //   };

  //   const HandelModel = (event) => {[[][]]]-=
  //     setCar({ ...car, Model: event.target.value });
  //   };
  //   // Reusable handler function using 'name' attribute
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <>
      <div>
        <h1 className="text-center">Object with State</h1>
      </div>

      <div className="container">
        {/* 1. Direct display */}
        <h3>1. Normal Object Output</h3>
        <span className="d-block mb-2">
          Company: {car.Company}, Color: {car.Color}, Model: {car.Model}, Year:{" "}
          {car.Year}
        </span>
        <hr />
        <div>
          <h3>2. Loop over Object</h3>
          {Object.entries(car).map(([key, value], index) => (
            <p key={index}>
              <strong>{key}</strong>: {value}
            </p>
          ))}
        </div>

        <div className="text-center d-flex flex-wrap gap-3 mt-4">
          <span className="fs-5">Change It:</span>

          <input
            name="Company"
            onChange={handleChange}
            value={car.Company}
            className="text-center form-control"
            type="text"
            placeholder="Company"
            style={{ width: "150px" }}
          />

          <input
            name="Color"
            onChange={handleChange}
            value={car.Color}
            className="text-center form-control"
            type="text"
            placeholder="Color"
            style={{ width: "150px" }}
          />

          <input
            name="Year"
            onChange={handleChange}
            value={car.Year}
            className="text-center form-control"
            type="number"
            placeholder="Year"
            style={{ width: "150px" }}
          />

          <input
            name="Model"
            onChange={handleChange}
            value={car.Model}
            className="text-center form-control"
            type="number"
            placeholder="Model"
            style={{ width: "150px" }}
          />
        </div>
      </div>
    </>
  );
}
// this is use of object state in react and how to update it using spread operator and also how to loop over object using Object.entries() method
export default ObjectState;
