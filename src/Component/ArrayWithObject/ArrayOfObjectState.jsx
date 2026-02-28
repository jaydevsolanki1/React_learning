import React, { useState } from "react";

function ArrayOfObjectState() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");

  function handeladdStudent() {
    if (!name || !year || !course) return;
    //This is why use Becuse filed is missing so please file up after show the currect
    const newStudent = {
      id: crypto.randomUUID(),
      name: name,
      year: year,
      course: course,
      currentYear: new Date().getFullYear(),
    };
    setStudents((s) => [...s, newStudent]);

    setName("");

    setCourse("");

    setYear("");
  }

  function handelremoverStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  function handelNameStudent(event) {
    setName(event.target.value);
  }
  function handelYearStudent(event) {
    setYear(Number(event.target.value));
  }
  function handelCourseStudent(event) {
    setCourse(event.target.value);
  }

  return (
    <div>
      <div className="container ">
        <h1 className="text-center">Array of Object with State</h1>
        <br />
      </div>
      <div className="container">
        <h3>List Of Student Object</h3>
        <div className="d-flex gap-3 ">
          <input
            type="text"
            name="name"
            id="sName"
            placeholder="Enter Your Name "
            className="border rounded"
            value={name}
            onChange={handelNameStudent}
            required
          />
          <input
            type="number"
            name="year"
            id="sYear"
            placeholder="Enter Your DOB Year"
            className="border rounded"
            value={year}
            onChange={handelYearStudent}
            required
          />
          <input
            type="course"
            name="course"
            id="sCourse"
            placeholder="Enter Your Course"
            className="border rounded"
            value={course}
            onChange={handelCourseStudent}
            required
          />
          <button
            className="btn btn-success btn-rounded"
            onClick={handeladdStudent}
          >
            Add Student
          </button>
        </div>
        <br />
        <hr />
        <ul className="d-flex justify-content-start gap-5 list-unstyled fs-5">
          <li>
            <span>Name : {name} </span>
          </li>
          <li>
            <span>DOB Year : {year}</span>
          </li>
          <li>
            <span>Course : {course}</span>
          </li>
          <li>
            {/* <span>CurrentYear : {students.currentYear}</span> NOT WORKING*/}
            CurrentYear :{" "}
            {students.length > 0 && students[students.length - 1].currentYear}
          </li>
        </ul>
        <hr />
        <h3>Student List</h3>
        <ul>
          {students.map((student, index) => (
            <li
              key={student.id}
              onClick={() => handelremoverStudent(student.id)}
            >
              {/* // <li key={index}> */}
              Name: {student.name} | DOB: {student.year} | Course:{" "}
              {student.course} | Year: {student.currentYear}
            </li>
          ))}
        </ul>
      
      </div>
      <br />
      <hr />
    </div>
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
