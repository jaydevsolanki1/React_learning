import React, { useState, useMemo, useCallback } from "react";
import Docs from "./Docs";

/* 🔹 Child Component (React.memo) */
const Child = React.memo(({ onClick }) => {
  console.log("🔁 Child Re-rendered");

  return (
    <div className="card p-3 mt-3">
      <h5>Child Component</h5>
      <button onClick={onClick} className="btn btn-primary">
        Click Child Button
      </button>
    </div>
  );
});

function PerformanceOptimization() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const users = ["Ram", "Shyam", "Ravi", "Amit", "Rahul", "Kiran"];

  /* 🔹 useMemo */
  const filteredUsers = useMemo(() => {
    console.log("⚡ Filtering users...");
    return users.filter((u) => u.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  /* 🔹 useCallback */
  const handleClick = useCallback(() => {
    console.log("✅ Child Button Clicked");
  }, []);

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-4">
          🚀 React Optimization (Docs + Demo)
        </h1>

        {/* ================== DOCS SECTION ================== */}

        <div className="alert alert-info">
          <strong>Summary:</strong> React.memo → stop re-render | useMemo → stop
          re-calculation | useCallback → stop function re-creation
        </div>

        {/* ================== DEMO SECTION ================== */}

        <div className="card p-3 mb-3">
          <h5>🔴 Parent Counter (Re-render test)</h5>
          <h6>Count: {count}</h6>

          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-danger"
          >
            Increase Counter
          </button>

          <p className="text-muted mt-2">
            👉 Parent re-renders, but child should NOT re-render
          </p>
        </div>

        <div className="card p-3 mb-3">
          <h5>🔍 useMemo Demo (Search Filter)</h5>

          <input
            type="text"
            placeholder="Search user..."
            className="form-control mb-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul>
            {filteredUsers.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>

          <p className="text-muted">
            👉 Filtering runs only when search changes
          </p>
        </div>

        {/* React.memo + useCallback */}
        <Child onClick={handleClick} />

        <p className="text-muted mt-3 p-2 bg-light border rounded">
          👉 Child does NOT re-render when counter changes (optimized)
        </p>
        <Docs />
      </div>
      <hr />
    </>
  );
}

export default PerformanceOptimization;
