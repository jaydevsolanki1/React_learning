import React, { useState } from "react";
import Header from "./Component/Header/Header";
import Details from "./Component/Main/Details_Main";
import CardWrapper from "./Component/card/Card.wrapper";
import UserDetails from "./Component/StudentUser/UserDetails";
import List from "./Component/List/List";
import Fotter from "./Component/Fotter/Fotter";

function App() {
  const [mode, setMode] = useState("light"); // <-- Step 1: define mode state

  return (
    <>
      <Header mode={mode} setMode={setMode} />     {/* Pass mode */}
      <Details mode={mode} />                      {/* If Details uses mode */}
      <CardWrapper mode={mode} />                  {/* If CardWrapper uses mode */}
      <UserDetails mode={mode} />                  {/* ✅ This is required */}
      <List mode={mode} />                         {/* If List uses mode */}
      <Fotter mode={mode} />                       {/* If Footer uses mode */}
    </>
  );
}

export default App;
