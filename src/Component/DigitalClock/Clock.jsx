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
    return `${pedZero(hour)} : ${pedZero(min)} : ${pedZero(sec)} : ${pedZero(meridiem)}`;
  }
  function pedZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="container-fluid my-4">
      <section className="mb-4">
        <h1 className="fs-1 text-center">Digital Clock</h1>
      </section>

      <section className="position-relative text-center clock-section">
        <img
          src="w.jpeg"
          className="img-fluid w-100 rounded"
          id="ok"
          alt="Background"
        />

        <div className="position-absolute top-50 start-50 translate-middle clock-text ">
          <span>{formatTime()}</span>
        </div>
      </section>
    </div>
  );
}

export default Clock;

// ----------------
// USE EFFECT
// ----------------

// React hook that allow you to share values between multiple level of components without passing props through level
