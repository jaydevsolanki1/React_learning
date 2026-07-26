import React, { useState } from "react";

function ArrayOfObjectState2() {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    year: "",
    course: "",
  });

  const { name, year, course } = form;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "year" ? Number(value) : value,
    }));
  }

  function handleAddStudent(e) {
    e.preventDefault();

    if (!name.trim() || !year || !course.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const newStudent = {
      id: crypto.randomUUID(),
      name: name.trim(),
      year,
      course: course.trim(),
      currentYear: new Date().getFullYear(),
    };

    setStudents((prev) => [...prev, newStudent]);

    setForm({
      name: "",
      year: "",
      course: "",
    });
  }

  function handleRemoveStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  return (
    <>
      <div className="container py-4">
        <h2 className="text-center mb-4">
          Array of Object with State (Advanced)
        </h2>

        {/* Form */}
        <form onSubmit={handleAddStudent}>
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-4">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-md-3">
              <label className="form-label">DOB Year</label>
              <input
                type="number"
                className="form-control"
                name="year"
                placeholder="Enter DOB Year"
                value={year}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-md-3">
              <label className="form-label">Course</label>
              <input
                type="text"
                className="form-control"
                name="course"
                placeholder="Enter Course"
                value={course}
                onChange={handleChange}
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

        <h3 className="mb-3">Student List</h3>

        {students.length === 0 ? (
          <div className="alert alert-secondary">No students added yet.</div>
        ) : (
          <div className="list-group">
            {students.map((student) => (
              <div key={student.id} className="list-group-item">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3">
                  <div>
                    <h5 className="mb-1">{student.name}</h5>

                    <p className="mb-1">
                      <strong>DOB Year:</strong> {student.year}
                    </p>

                    <p className="mb-1">
                      <strong>Course:</strong> {student.course}
                    </p>

                    <p className="mb-0">
                      <strong>Current Year:</strong> {student.currentYear}
                    </p>
                  </div>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemoveStudent(student.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <hr />
    </>
  );
}

export default ArrayOfObjectState2;

// ADVANCED TO ADVANCED CODE : INPUT IN ONE

// import React, { useState } from "react";

// /* ===============================
//    🔹 REUSABLE INPUT (ONLY ONCE)
// ================================ */
// function InputField({ type, name, placeholder, value, onChange }) {
//   return (
//     <input
//       type={type}
//       name={name}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="border rounded p-2"
//       required
//     />
//   );
// }

// /* ===============================
//    🔹 MAIN COMPONENT
// ================================ */
// function ArrayOfObjectState3() {
//   const [students, setStudents] = useState([]);

//   const [form, setForm] = useState({
//     name: "",
//     year: "",
//     course: "",
//   });

//   /* 🔹 INPUT CONFIG (ONLY ONE PLACE) */
//   const inputFields = [
//     {
//       id: "name",
//       type: "text",
//       name: "name",
//       placeholder: "Enter Name",
//     },
//     {
//       id: "year",
//       type: "number",
//       name: "year",
//       placeholder: "Enter DOB Year",
//     },
//     {
//       id: "course",
//       type: "text",
//       name: "course",
//       placeholder: "Enter Course",
//     },
//   ];

//   /* 🔹 ONE CHANGE HANDLER */
//   function handleChange(e) {
//     const { name, value } = e.target;

//     setForm(prev => ({
//       ...prev,
//       [name]: name === "year" ? Number(value) : value,
//     }));
//   }

//   /* 🔹 ADD STUDENT */
//   function handleAddStudent() {
//     if (!form.name || !form.year || !form.course) return;

//     const newStudent = {
//       id: crypto.randomUUID(), // ✅ correct key
//       ...form,
//       currentYear: new Date().getFullYear(),
//     };

//     setStudents(prev => [...prev, newStudent]);
//     setForm({ name: "", year: "", course: "" });
//   }

//   return (
//     <div className="container">
//       <h2>All Inputs From One Configuration</h2>

//       {/* ✅ ALL INPUTS GENERATED HERE */}
//       <div className="d-flex gap-3">
//         {inputFields.map(field => (
//           <InputField
//             key={field.id}              // ✅ NOT index
//             type={field.type}
//             name={field.name}
//             placeholder={field.placeholder}
//             value={form[field.name]}
//             onChange={handleChange}
//           />
//         ))}

//         <button onClick={handleAddStudent} className="btn btn-success">
//           Add Student
//         </button>
//       </div>

//       <hr />

//       <h3>Student List</h3>
//       <ul>
//         {students.map(student => (
//           <li key={student.id}>
//             Name: {student.name} | DOB: {student.year} | Course:{" "}
//             {student.course} | Year: {student.currentYear}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ArrayOfObjectState3;
