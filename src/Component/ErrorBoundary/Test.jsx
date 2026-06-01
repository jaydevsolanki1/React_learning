import React, { useState } from "react";

function Test() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Crash triggered!");
  }
  console.log(crash);

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-4">⚠️ ErrorBoundary Demo</h1>

        {/* 📖 How it works */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4 className="card-title">📖 How This Works</h4>
            <p className="mb-1">1️⃣ App starts → crash = false → normal UI</p>
            <p className="mb-1">2️⃣ Click button → crash = true</p>
            <p className="mb-1">3️⃣ Component re-renders</p>
            <p className="mb-1">4️⃣ Error is thrown</p>
            <p className="mb-1">5️⃣ ErrorBoundary catches it</p>
            <p className="mb-0">6️⃣ Fallback UI is displayed</p>
          </div>
        </div>

        {/* ⚠️ Warning */}
        <div className="alert alert-warning">
          <h5>⚠️ Important Warning</h5>
          <p className="mb-1">✔ This error is intentional (for testing)</p>
          <p className="mb-1">✔ Console will show error → normal</p>
          <p className="mb-1">
            ❌ ErrorBoundary does NOT catch API or click errors
          </p>
          <p className="mb-0">✔ It only catches rendering errors</p>
        </div>

        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4 className="card-title">📌 Role of Files</h4>
            <p className="mb-0">
              <strong>Test File:</strong> This file is used to simulate (create)
              an intentional error when the button is clicked, helping us test
              how the app behaves during a crash.
              <br />
              <strong>ErrorBoundary File:</strong> This file acts as a safety
              guard that catches rendering errors and prevents the entire
              application from crashing by showing a fallback UI instead.
            </p>
          </div>
        </div>

        {/* 💥 Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => setCrash(true)}
            className="btn btn-danger px-4 py-2"
          >
            💥 Crash App
          </button>
        </div>
        <br />
        <div className="d-flex justify-content-center gap-2 m-1 border p-4 rounded shadow">
          <p className="text-center text-warning border border-rounded w-50 p-3">
            Check this my React Docs so define how its works errorBoundary and
            how to crash app and how to test it.
          </p>

          <ul className="list-unstyled text-danger w-75 border  p-3">
            <li>
              - ErrorBoundary component import on main file & isn't work with
              strick mode with
            </li>
            <li>- test component import on app file</li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Test;
