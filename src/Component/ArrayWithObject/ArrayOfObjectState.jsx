import React, { useState } from "react";

function ArrayOfObjectState() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");

  function handleAddStudent(event) {
    event.preventDefault();

    if (!name.trim() || !year || !course.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudent = {
      id: crypto.randomUUID(),
      name: name.trim(),
      year: Number(year),
      course: course.trim(),
      currentYear: new Date().getFullYear(),
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);

    setName("");
    setYear("");
    setCourse("");
  }

  function handleRemoveStudent(id) {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id),
    );
  }

  return (
    <>
      <div className="container py-4">
        <h1 className="text-center mb-4">Array of Object with State</h1>

        <h3 className="mb-3">Add Student</h3>

        <form onSubmit={handleAddStudent}>
          <div className="row g-3">
            <div className="col-12 col-md-4">
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
                onChange={(e) => setYear(e.target.value)}
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

            <div className="col-12 col-md-2 d-grid">
              <button type="submit" className="btn btn-success">
                Add Student
              </button>
            </div>
          </div>
        </form>

        <hr className="my-4" />

        <div className="row text-center g-3">
          <div className="col-6 col-md-3">
            <div className="border rounded p-3">
              <strong>Name</strong>
              <br />
              {name || "-"}
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="border rounded p-3">
              <strong>DOB Year</strong>
              <br />
              {year || "-"}
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="border rounded p-3">
              <strong>Course</strong>
              <br />
              {course || "-"}
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="border rounded p-3">
              <strong>Current Year</strong>
              <br />
              {new Date().getFullYear()}
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <h3>Student List</h3>

        {students.length === 0 ? (
          <p className="text-muted">No students added yet.</p>
        ) : (
          <ul className="list-group">
            {students.map((student) => (
              <li
                key={student.id}
                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
              >
                <div>
                  <strong>{student.name}</strong>
                  <br />
                  DOB: {student.year}
                  <br />
                  Course: {student.course}
                  <br />
                  Current Year: {student.currentYear}
                </div>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleRemoveStudent(student.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr />
    </>
  );
}

export default ArrayOfObjectState;

// 6️⃣ FINAL RULE (MEMORIZE THIS)

// Index is position, not identity
// React needs identity, not position.

// 🧠 One-line takeaway

// index works
// index runs
// index is dangerous in dynamic lists
// id is always correct
