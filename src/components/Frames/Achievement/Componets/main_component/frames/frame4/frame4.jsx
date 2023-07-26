import React from "react";
import { useContext } from "react";
import { ShowIndex } from "../../../../Achievement";
import "./frame4.css";
export default function frame4() {
  const text_arr=[
  "I have completed the Introduction to Machine learning course conducted by the NPTEL and finally in the result I got the Elite+silver medal with the title of “5% Topper” among the 266 candidates from all the age groups.",
  "I have participated in the ICT YOUTH TALK 2022. I have been short listed from the 10,000 participants in the first round and gone to second round where 10 out of 100 participants were selected for the regional finalist. I got selected as a regional finalist and got an opportunity to speak in front of 3000 students.",
  "March Past is all about team work, so as a team we got the first place in the 75th Independence day parade.",
  "I have completed the Introduction to Programming in C conducted by the NPTEL and I was honored with a Elite+Gold medal for scoring good marks in the final exam."
]
  const { achieveIndex, setAchieveIndex, n } = useContext(ShowIndex);
  return <div className="right_frame4">{text_arr[achieveIndex]}</div>;
}
