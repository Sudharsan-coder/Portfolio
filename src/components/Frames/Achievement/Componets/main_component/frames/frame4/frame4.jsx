import React from "react";
import { useContext } from "react";
import { ShowIndex } from "../../../../Achievement";
import "./frame4.css";
export default function frame4() {
  const text_arr=[
  "I have completed the Introduction to Machine learning course conducted by the NPTEL and finally in the result I got the Elite+silver medal with the title of “5% Topper” among the 266 candidates from all the age groups.",
  "I successfully advanced through ICT Youth Talk 2022, moving from 10,000 initial participants to the regional finals' top 10 out of 100. Spoke before 3000 students as a finalist.",
  "March Past is all about team work, so as a team we got the first place in the 75th Independence day parade.",
  "I have completed the Introduction to Programming in C conducted by the NPTEL and I was honored with a Elite+Gold medal for scoring good marks in the final exam."
]
  const { achieveIndex, setAchieveIndex, n } = useContext(ShowIndex);
  return <div className="right_frame4">{text_arr[achieveIndex]}</div>;
}
