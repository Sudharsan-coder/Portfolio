import "./nav.css";
import menu from "../../../assets/menu_bar.svg"
import cross from "../../../assets/close-circle-svgrepo-com.svg"
import { useState } from "react";
export default function Nav({mode,setMode}) {
  const [showMenu,setMenu] = useState(false)
  function handleClick(event, item) {
    event.preventDefault();
    document
      .getElementById(item)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const nav_links=[
    <a key={1}
    onClick={(event) => handleClick(event, "Achievement")}
    className="achievement a"
  >
    Achievements
  </a>,
  <a key={2}
    onClick={(event) => handleClick(event, "Project")}
    className="project a"
  >
    Projects
  </a>,
  <a key={3}
    onClick={(event) => handleClick(event, "Contact")}
    className="Contact a"
  >
    Contact
  </a>,
  <label key={4} className={!mode ? "switch_white" : "switch_black"}>
  <input type="checkbox" onClick={()=>{setMode(!mode)}}></input>
  <span className={!mode?"black_slider round":"white_slider round"}></span>
</label>
  ]
  return (
    <>
      <div className="nav">
        <a onClick={(event) => handleClick(event, "Home")}>Home</a>
        <div className="nav_links">
          {nav_links}
        </div>
        <div className="nav_menu"  >
          <img src={showMenu?cross:menu} alt="menu" onClick={()=>{setMenu(!showMenu)}}/>
         <div className= {showMenu?"menu_list menu_active":"menu_list"}>
            {nav_links}
          </div>
        </div>
      </div>
    </>
  );
}
