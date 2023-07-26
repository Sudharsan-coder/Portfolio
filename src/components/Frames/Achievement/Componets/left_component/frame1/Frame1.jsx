import React from "react";
import "./style.css";
import { useContext } from "react";
import { ShowIndex } from "../../../Achievement";

export default function Frame1() {
  const { achieveIndex, setAchieveIndex, n } = useContext(ShowIndex);
  var circles = [];

  for (let i = 0; i < n; i++) {
    circles.push(
      <div
        key={i}
        className={achieveIndex == i ? "spread" : "circles"}
        onClick={() => {
          setAchieveIndex(i);
        }}
      ></div>
    );
  }
  return (
    <div className="left_f1_main">
      {/* <h1> {achieveIndex} </h1> */}
      <div className="circles_container">{circles}</div>
    </div>
  );
}
