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

  function handleAddStudent() {
    if (!name || !year || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: crypto.randomUUID(),
      name,
      year,
      course,
      currentYear: new Date().getFullYear(),
    };

    setStudents((prev) => [...prev, newStudent]);

    setForm({ name: "", year: "", course: "" });
  }

  function handleRemoveStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  return (
    <div>
      <div className="container">
        <h2>Array of Object with State (Advanced Code)</h2>

        <div className="d-flex gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="year"
            placeholder="DOB Year"
            value={year}
            onChange={handleChange}
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={course}
            onChange={handleChange}
          />

          <button onClick={handleAddStudent}>Add</button>
        </div>

        <hr />

        <h3>Student List</h3>

        <ul>
          {students.map((student) => (
            <li key={student.id}>
              Name: {student.name} | DOB: {student.year} | Course:{" "}
              {student.course} | Year: {student.currentYear}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleRemoveStudent(student.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <hr />
    </div>
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
