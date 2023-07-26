import "./Home.css";
import sourc from "../../../assets/me_no_background.png";
import { useState } from "react";
import { useRef } from "react";

export default function Home() {
  const move_back = useRef(false);
  const [current_name, setCurrent_name] = useState(0);
  const [blinker, setBlinker] = useState(true);
  const names = [
    ["S", "u", "d", "h", "a", "r", "s", "a", "n"],
    ["a", " ", "W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"],
    ["a", " ", "M", "L", " ", "E", "n", "t", "h", "u", "c", "i", "a", "s", "t"],
  ];
  const names_length = names.length;
  const name_arr = names[current_name];
  const n = name_arr.length;
  const [name_index, setName_index] = useState(0);
  const name = name_arr.map((letter, index) => {
    var word = "";
    if (index <= name_index) word += letter;
    else return word;
    return word;
  });
  const name_interval = setInterval(change_letter, 700);
  function change_letter() {
    clearInterval(name_interval);
    if (name_index == -1) {
      move_back.current = false;
      setCurrent_name((current_name + 1) % names_length);
    }
    if (name_index == n - 1) move_back.current = true;
    setName_index(move_back.current ? name_index - 1 : name_index + 1);
  }
  const cursor_interval = setTimeout(Blink, 350);
  function Blink() {
    setBlinker(!blinker);
  }
  return (
    <div className="frame1" id="Home">
      <img src={sourc} alt="me" />
      <div className="frame1_content">
        <p className="hi">Hi</p>
        <div className="name_container">
          <p className="Im">I'm </p>
          <div className="name">
            {name}
            {blinker && "|"}
          </div>
        </div>
        <p className="about_text">
          My bachelor’s degree in Computer Science and Engineering is currently
          being perceived. Competitive programming and machine learning are two
          topics that intrigue me. I’m currently honing my craft to better
          myself. I firmly believe that “Machine Learning is the last invention
          that humanity needs to make”, and I’m glade to be a part of it in the
          future.
        </p>
      </div>
    </div>
  );
}
