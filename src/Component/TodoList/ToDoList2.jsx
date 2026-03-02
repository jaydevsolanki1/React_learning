import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["wake Up Early !", "Eat Break-fast !","Walking 2-3 km"]);
  const [newTask, setnewTask] = useState("");

  function handelInputChange(event) {
    setnewTask(event.target.value);
  }

  function handelAddTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setnewTask("");
    }
  }
  function handelRemoveTask(id) {
    const UpdateTask = task.filter((_, i) => i !== id);
    setTask(UpdateTask);
  }

  function moveTaskUP(id) {
    if (id === 0) return;

    const UpdateTask = [...task];
    [UpdateTask[id - 1], UpdateTask[id]] = [UpdateTask[id], UpdateTask[id - 1]];
    setTask(UpdateTask);
  }

  function moveTaskDown(id) {
    if (id === task.length - 1) return;

    const UpdateTask = [...task];
    [UpdateTask[id + 1], UpdateTask[id]] = [UpdateTask[id], UpdateTask[id + 1]];
    setTask(UpdateTask);
  }

  return (
    <div>
      <div className="contianer-fluid ">
        <h1 className="text-center">To Do List</h1>
        <br />
        <div className="d-flex gap-3 justify-content-center ">
          <input
            type="text"
            name="text"
            id="todoText"
            placeholder="Enter Your Task"
            className="fs-5 border rounded w-50 border border-dark p-2"
            value={newTask}
            onChange={handelInputChange}
          />
          <button
            className="btn btn-primary fs-5  boorder rounded"
            onClick={handelAddTask}
          >
            Add Task
          </button>
        </div>
        <br />
        <span className="d-flex justify-content-center fs-5 mb-2">
          Task List
        </span>
        <div className="container ">
          <ol className="list-group mx-auto w-100 w-md-75">
            {task.map((task, id) => (
              <li
                key={id}
                className="list-group-item d-flex flex-column flex-md-row
      justify-content-between align-items-start align-items-md-center m-1 border-dark border rounded"
              >
                {/* Task Text */}
                <span className="fs-6 fs-md-5 mb-2 mb-md-0">{task}</span>

                {/* Buttons */}
                <div className="d-flex gap-2 flex-wrap ">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handelRemoveTask(id)}
                  >
                    ❌
                  </button>

                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => moveTaskUP(id)}
                  >
                    👆🏻
                  </button>

                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => moveTaskDown(id)}
                  >
                    👇🏻
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default ToDoList;
