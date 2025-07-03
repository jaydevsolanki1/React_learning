import React, { useEffect, useState } from "react";
import Header from "./Component/Header/Header";
import Details from "./Component/MainSection/Details_Main";
import CardWrapper from "./Component/card/Card.wrapper";
import List from "./Component/List/List";
import Fotter from "./Component/Fotter/Fotter";
import UserGrettingWrap from "./Component/Gretting/UserGrettingWrap";
import AnotherGreetingWrap from "./Component/Gretting/AnotherGrettingWrap";
import UserDetailsWrap from "./Component/StudentUser/UserDetailsWrap";
import Button from "./Component/Button/Button";

function App() {
  const [mode, setMode] = useState("light");

  // ✅ Detect system mode on first render
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
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
      <Fotter mode={mode} />
    </>
  );
}

export default App;
