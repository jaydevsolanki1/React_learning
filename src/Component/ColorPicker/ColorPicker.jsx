import React, { useState } from "react";

function ColorPicker({ mode }) {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  // Function to calculate luminance and return appropriate text class
  const getTextColorClass = (hexColor) => {
    // Convert HEX to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    // Calculate luminance
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance < 140 ? "text-light" : "text-dark";
  };

  // const modeBgClass = mode ? "bg-dark" : "bg-light";
  const modeTextClass = mode ? "text-light" : "text-dark";
  const selectedColorTextClass = getTextColorClass(color);

  return (
    <>
      <div className={`container-fluid  p-4 `}>
        <h1 className="text-center mb-4">Color Picker</h1>

        <div
          className={`p-3 rounded mb-3 text-center fw-bold ${selectedColorTextClass} border border-1 border-dark`}
          style={{ backgroundColor: color }}
        >
          Selected Color: {color}
        </div>

        <div className="d-flex align-items-center justify-content-center gap-3 fs-4">
          <label htmlFor="colorPicker" className="form-label mb-0">
            Select a Color:
          </label>
          <input
            type="color"
            id="colorPicker"
            className="form-control form-control-color "
            onChange={handleColorChange}
            value={color}
          />
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default ColorPicker;
