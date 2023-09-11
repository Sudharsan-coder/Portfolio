import React from "react";
import Nav from "./nav/nav.jsx";
import Social from "./social/Social.jsx";
export default function Main({ mode, setMode }) {
  return (
    <>
      <Nav mode={mode} setMode={setMode} />
      <Social />
    </>
  );
}
