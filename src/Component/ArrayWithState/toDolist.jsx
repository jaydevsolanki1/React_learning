import { element, func } from "prop-types";
import React, { useState } from "react";

function Todolist() {
  const [food, setFood] = useState(["Apple", "Banana", "Cheery"]);

  function handeladdtodo() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood((f) => [...f, newFood]);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handeladdtodo(); // Add item when Enter is pressed
    }
  }

  function handelremovetodo(index) {
    setFood(food.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="container justify-content-center ">
        <h1 className="text-center ">Array with State</h1>
        <br />
        <h3>List of Food</h3>
        <ul>
          {food.map((food, index) => (
            <li key={index} onClick={() => handelremovetodo(index)}>
              {food}
            </li>
          ))}
        </ul>
        <hr />
        <div className="d-flex justify-content-center gap-2 p-1 m-1">
          <input
            type="text"
            name="addFood "
            id="foodInput"
            onKeyDown={handleKeyDown}
            className="border rounded"
            placeholder="Enter Your Food Name"
          />
          <button className="btn btn-primary" onClick={handeladdtodo}>
            Add Food
          </button>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Todolist;

// function Todolist() {
//   const [food, setFood] = useState(["Apple", "Banana", "Cherry"]);

//   // * Advanced Topic   //

//   const [inputValue, setInputValue] = useState("");

//   // * Advanced Topic   //

//   function handeladdtodo() {
//     if (inputValue.trim() === "") return;
//     setFood((f) => [...f, inputValue]);
//     setInputValue("");
//   }
