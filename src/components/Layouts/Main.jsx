import React from "react";
import Nav from "./nav/nav.jsx";
import Social from "./social/Social.jsx"
export default function Main({mode,setMode}) {
  return (
    <>
    {/* <div className="navegation" style={{position:"absolute",top:"10px",left:"10px"}} > */}
      <Nav mode={mode} setMode={setMode}/>
      {/* </div> */}
      <Social/>
    </>
  );
}
