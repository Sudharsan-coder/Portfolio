import React from "react";
import Left_block from "./Componets/left_component/Left_component.jsx";
import "./Achievement.css";
import { useState, createContext } from "react";

export const ShowIndex = createContext();

export default function App() {
  const [achieveIndex, setAchieveIndex] = useState(0);
  var n=4;

  return (
    <>
      <ShowIndex.Provider value={  {achieveIndex, setAchieveIndex, n} }>
        <div className="achieve_container" id="Achievement">
          <Left_block />
        </div>
      </ShowIndex.Provider>
    </>
  );
}
