import React from "react";
import Frame1 from "./frame1/Frame1.jsx";
import Frame2 from "./frame2/Frame2.jsx";
import Frame3 from "./frame3/Frame3.jsx";
import Main1 from "../main_component/right_component.jsx"
import "./Left_component.css";
import animationData from "../../../../../assets/Achievements/certificate.gif" 
export default function Main() {
  return (
    <>
    <div className="left_block">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <img className="achieve" src={animationData} />
    </div>
      <Main1/>
    </>
  );
}
