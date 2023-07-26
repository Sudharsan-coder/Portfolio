import React from "react";
import "./style.css";
import { ShowIndex } from "../../../Achievement";
import { useContext, useEffect } from "react";
export default function Frame3() {
  const title_arr=["5% Topper in Machine Learning","ICT YOUTH TALK REGINAL FINALIST 2022","First Place in March Past","Gold medal in C"]
  const { achieveIndex, setAchieveIndex, n } = useContext(ShowIndex);
  // let move=null
  // useEffect(()=>{
  //   clearTimeout(move)
  //   move=setTimeout(()=>{setAchieveIndex((achieveIndex+1)%n)},5000)
  // },[achieveIndex])
  return (
    <div className="left_f3_main">
      <input
        type={"button"}
        onClick={() => {
          setAchieveIndex(achieveIndex == 0 ? n - 1 : achieveIndex - 1);
        }}
        value={"<"}
      />
      <div className="title">{title_arr[achieveIndex]}</div>
      <input
        type={"button"}
        onClick={() => {
          setAchieveIndex((achieveIndex + 1) % n);
        }}
        value={">"}
      />
    </div>
  );
}
