import React, { useEffect, useState } from "react";
import Header from "./Component/Header/Header";
import Details from "./Component/MainSection/Details_Main";
import CardWrapper from "./Component/card/Card.wrapper";
import UserGrettingWrap from "./Component/Gretting/UserGrettingWrap";
import UserDetailsWrap from "./Component/StudentUser/UserDetailsWrap";
import AnotherGreetingWrap from "./Component/Gretting/AnotherGrettingWrap";
import List from "./Component/List/List";
import Button from "./Component/Button/Button";
import UseState from "./Component/UseState/Usestate";
import Fotter from "./Component/Fotter/Fotter";
import OnChange from "./Component/OnChange/OnChange";
import ColorPicker from "./Component/ColorPicker/ColorPicker";
import UpdaterFunction from "./Component/UpdaterFunction/UpdaterFunction";
import ObjectState from "./Component/ObjectWithState/ObjectState";
import Todolist from "./Component/ArrayWithState/toDolist";
import ArrayOfObjectState from "./Component/ArrayWithObject/ArrayOfObjectState";
import ArrayOfObjectState2 from "./Component/ArrayWithObject/AdvancedCode";
import ToDoList2 from "./Component/TodoList/ToDoList2";
import Use_Effect from "./Component/UseEffect/Use_Effect";
import Clock from "./Component/DigitalClock/clock";
import UseContext from "./Component/UseContext/UseContext";
import UserRef from "./Component/UseRef/UserRef";
import DigitalStopWatch from "./Component/StopWatch/DigitalStopWatch";
import AddLapCode from "./Component/StopWatch/AddLapCode";
import Routing from "./Component/LearnRout/routing";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/LearnRout/Home";
import About from "./Component/LearnRout/About";
import Contact from "./Component/LearnRout/Contact";
import Api from "./Component/ApiIntegration/Api";
import AxiosReplaceFetch from "./Component/Axious/AxiosReplaceFetch";
import CustomHooks from "./Component/CustomHooks/CustomHooks";
import Structure from "./Component/FolderStructure/Structure";
import AsyncAwait from "./Component/AsyncAwait.jsx/AsyncAwait";

function App() {
  const [mode, setMode] = useState("light");

  // ✅ Detect system mode on first render
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setMode(prefersDark ? "dark" : "light");
  }, []);

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <Details mode={mode} />
      <CardWrapper mode={mode} />
      <UserDetailsWrap mode={mode} />
      <UserGrettingWrap mode={mode} />
      <AnotherGreetingWrap mode={mode} />
      <List mode={mode} />
      <Button mode={mode} />
      <UseState mode={mode} />
      <OnChange mode={mode} />
      <ColorPicker mode={mode} />
      <UpdaterFunction mode={mode} />
      <ObjectState mode={mode} />
      <Todolist mode={mode} />
      <ArrayOfObjectState mode={mode} />
      <ArrayOfObjectState2 mode={mode} />
      <ToDoList2 mode={mode} />
      <Use_Effect mode={mode} />
      <Clock mode={mode} />
      <UseContext mode={mode} />
      <UserRef mode={mode} />
      <DigitalStopWatch mode={mode} />
      <AddLapCode mode={mode} />
      <Routing mode={mode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Api mode={mode} />
      <AxiosReplaceFetch mode={mode} />
      <CustomHooks mode={mode} />
      <Structure mode={mode} />
      <AsyncAwait mode={mode} />
      <Fotter mode={mode} />
    </>
  );
}

export default App;
//! Check Git Hub code check when code is another source like another pc to this pc run.

//! Context Api in Theme in dark and light theme use
//  📁 Proper Structure
// src/
//  ├── context/
//  │    └── ThemeContext.js
//  ├── components/
//  │    └── Header.jsx
//  ├── App.jsx

// -----------------------------------------
// 1️⃣ Create Context
// -----------------------------------------
// src/context/ThemeContext.js

// import { createContext } from "react";

// const ThemeContext = createContext();

// export default ThemeContext;

// -----------------------------------------
// 2️⃣ Provide Context (Global)
// App.jsx
// -----------------------------------------

// import React, { useState } from "react";
// import ThemeContext from "./context/ThemeContext";
// import Header from "./components/Header";

// function App() {
//   const [mode, setMode] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ mode, setMode }}>
//       <Header />
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// -----------------------------------------
// 3️⃣ Use Context in Component
// Header.jsx
// -----------------------------------------

// import React, { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";

// function Header() {
//   const { mode, setMode } = useContext(ThemeContext);

//   return (
//     <div>
//       <h1>Mode: {mode}</h1>
//       <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
//         Toggle Mode
//       </button>
//     </div>
//   );
// }

// export default Header;
