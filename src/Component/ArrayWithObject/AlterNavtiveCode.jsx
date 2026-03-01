import React, { useState } from "react";

function ArrayOfObjectState() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");

  function handeladdStudent() {
    if (!name || !year || !course) return;

    const newStudent = {
      id: crypto.randomUUID(),
      name,
      year,
      course,
      currentYear: new Date().getFullYear(),
    };

    setStudents((prev) => [...prev, newStudent]);

    // reset inputs
    setName("");
    setYear("");
    setCourse("");
  }

  function handelremoverStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  return (
    <div className="container-fluid px-3 px-md-5">
      <h1 className="text-center my-4">Array of Object with State</h1>

      {/* ================= FORM ================= */}
      <div className="card p-3 shadow-sm">
        <h3 className="mb-3">Add Student</h3>

        <div className="row g-3">
          <div className="col-12 col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter DOB Year"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            />
          </div>

          <div className="col-12 col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-3 d-grid">
            <button
              className="btn btn-success"
              onClick={handeladdStudent}
            >
              Add Student
            </button>
          </div>
        </div>
      </div>

      {/* ================= PREVIEW ================= */}
      <hr className="my-4" />

      <h3>Latest Input Preview</h3>
      <ul className="row list-unstyled fs-6 fs-md-5">
        <li className="col-12 col-md-3">Name: {name}</li>
        <li className="col-12 col-md-3">DOB Year: {year}</li>
        <li className="col-12 col-md-3">Course: {course}</li>
        <li className="col-12 col-md-3">
          Current Year: {students.at(-1)?.currentYear || "-"}
        </li>
      </ul>

      {/* ================= LIST ================= */}
      <hr className="my-4" />

      <h3>Student List</h3>

      {students.length === 0 ? (
        <p className="text-muted">No students added yet.</p>
      ) : (
        <ul className="list-group">
          {students.map((student) => (
            <li
              key={student.id}
              className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
            >
              <span>
                <strong>{student.name}</strong> | DOB: {student.year} | Course:{" "}
                {student.course} | Year: {student.currentYear}
              </span>

              <button
                className="btn btn-sm btn-danger mt-2 mt-md-0"
                onClick={() => handelremoverStudent(student.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <hr className="my-5" />

      {/* ================= NOTES ================= */}
      {/* 
        6️⃣ FINAL RULE (MEMORIZE THIS)

        Index is position, not identity
        React needs identity, not position.

        🧠 One-line takeaway:
        index works
        index runs
        index is dangerous in dynamic lists
        id is always correct
      */}
    </div>
  );
}

export default ArrayOfObjectState;