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
      <UseState mode={mode} />
      <OnChange mode={mode} />
      <ColorPicker mode={mode} />
      <UpdaterFunction mode={mode} />
      <ObjectState mode={mode} />
      <Fotter mode={mode} />
    </>
  );
}

export default App;
