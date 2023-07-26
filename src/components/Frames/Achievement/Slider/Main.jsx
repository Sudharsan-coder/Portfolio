import p1 from "../../../../assets/Achievements/C_certificate.png";
import p2 from "../../../../assets/Achievements/ICT1.jpg";
import p3 from "../../../../assets/Achievements/kanini.jpg";
import p4 from "../../../../assets/Achievements/march_past.jpg";
import "./style.css";
import { useEffect, useRef, useState } from "react";
export default function Main() {
  const arr = [p1, p2, p3, p4];
  const n = arr.length;
  const [current, setCurrent] = useState(0);
  let move = null;
  useEffect(() => {
    move = setTimeout(next_item, 5000);
    console.log("eff  " + current);
  }, [current]);
  function previous() {
    clearTimeout(move);
    if (current == 0) setCurrent(n - 1);
    else setCurrent(current - 1);
  }
  function next_item() {
    clearTimeout(move);
    if (current == n - 1) setCurrent(0);
    else setCurrent(current + 1);
  }
  return (
    <div className="img_slider">
      <input
        type="button"
        onClick={previous}
        value="<"
        className="img_slides_button"
      />
      <div>
        <img src={arr[current]} alt="images" style={{ width: "650px" }} />
      </div>
      <input
        type="button"
        onClick={next_item}
        value=">"
        className="img_slides_button"
      />
    </div>
  );
}
