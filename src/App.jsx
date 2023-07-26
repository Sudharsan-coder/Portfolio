import React, { useState } from "react";
import Layout from "./components/Layouts/Main.jsx";
import Main from "./components/Frames/combiner.jsx"
import { Pannellum } from "pannellum-react";
import night from "./assets/night.jpg"
import morning from "./assets/morning3.jpg"
export default function App() {
  const [isBlack,setBlack]=useState(true);
  return (
    <div className="main" style={isBlack?{color:"white"}:{color:"black"}}>
    <Layout mode={isBlack} setMode={setBlack}/>
    <Main/>
      <div className="pana">
  <Pannellum 
      width="120vw"
      height="122vh"
      image={isBlack?night:morning}
      yaw={600}
      hfov={110}
      autoLoad
      autoRotate={-2}
      compass={true}
      showZoomCtrl={false}
      mouseZoom={false}
    >
    {/* <Pannellum.HotSpot
    type="custom"
    pitch={-10}
    yaw={-120}
    text="info"
    />  */}
    </Pannellum>
    </div>
    </div>
  );
}
