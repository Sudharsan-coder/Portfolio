import React from "react";
import "./style.css";
import { ShowIndex } from "../../../Achievement";
import { useContext } from "react";

export default function Frame2() {
  const { achieveIndex, setAchieveIndex, n } = useContext(ShowIndex);
  const date_arr=["October 2022","Septumber 2022","August 2022","April 2022"]
  return (
    <div className="left_f2_main">
      <h4>Date:</h4>
      <div className="dates">{date_arr[achieveIndex]}</div>
    </div>
  );
}
