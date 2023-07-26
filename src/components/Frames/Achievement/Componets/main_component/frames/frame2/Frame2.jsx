import React from "react";
import "./style.css";
import { useContext,useEffect } from "react";
import { ShowIndex } from "../../../../Achievement";
import { useState } from "react";
import ML from "../../../../../../../assets/Achievements/Introduction_to_Machine_Learning.jpg"
import ICT1 from "../../../../../../../assets/Achievements/ict1-min (1).png"
import ICT2 from "../../../../../../../assets/Achievements/ICT2.jpg"
import ICT3 from "../../../../../../../assets/Achievements/ICT4-min.png"
// import kanini from "../../../../../../../assets/Achievements/kanini.jpg"
import march1 from "../../../../../../../assets/Achievements/march_past1.jpg"
import march2 from "../../../../../../../assets/Achievements/march_past2.jpg"
import C from "../../../../../../../assets/Achievements/C_certificate.png"


export default function Frame2() {
  const [current,setCurrent]=useState(0)
  let move=setTimeout(()=>{setCurrent((current+1)%n)},5000)
  if(n!=1)
  useEffect(()=>{
    clearTimeout(move)
    move=setTimeout(()=>{setCurrent((current+1)%n)},5000)
  },[current])
  const images=[[ML],[ICT1,ICT2,ICT3],[march1,march2],[C]]

  const { achieveIndex, setAchieveIndex } = useContext(ShowIndex);
  var n=images[achieveIndex].length;  
  // console.log(n)
  return <div className="right_f2_main">
    {n!=1 &&
      <input
        type={"button"}
        onClick={() => {
        clearTimeout(move)
          setCurrent(current == 0 ? n - 1 : current - 1);
        }}
        value={"<"}
      />}
     <img src={images[achieveIndex][current]} alt="pics"/>
     {n!=1 && <input
        type={"button"}
        onClick={() => {
          clearTimeout(move)
          setCurrent((current + 1) % n);
        }}
        value={">"}
      />}
     </div>;
}
