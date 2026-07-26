import React, { useState } from "react";
import "./Clock.css";
import { useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  (useEffect(() => {
    const interValId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interValId);
  }),
    []);

  function formatTime() {
    let hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const meridiem = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${padZero(hour)} : ${padZero(min)} : ${padZero(sec)} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 fw-bold">Digital Clock</h1>

      <div className="clock-container position-relative mx-auto">
        <img
          src="w.jpeg"
          alt="Clock Background"
          className="img-fluid rounded shadow w-100"
        />

        <div className="clock-text position-absolute top-50 start-50 translate-middle text-center">
          {formatTime()}
        </div>
      </div>
    </div>
  );
}

export default Clock;

// ----------------
// USE EFFECT
// ----------------

// React hook that allow you to share values between multiple level of components without passing props through level
