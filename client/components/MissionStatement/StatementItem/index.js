//import { css } from "@material-ui/system";
import css from "./StatementItem.module.css";
import { useState, useEffect } from "react";
import icon1 from "../../../images/MS1/Mask Group 1.png";
import icon2 from "../../../images/MS2/Mask Group 2.png";
import icon3 from "../../../images/MS3/Mask Group 3.png";
import icon4 from "../../../images/MS4/Mask Group 4.png";
export default function StatementItem({ text, index }) {
  const [icon, setIcon] = useState(icon2);
  useEffect(() => {
    if (index === 0) {
      console.log(index, "index");
      setIcon(icon1);
    } else if (index === 1) {
      setIcon(icon2);
    } else if (index === 2) {
      setIcon(icon3);
    } else {
      setIcon(icon4);
    }
  }, []);

  return (
    <>
      <div className={css.container}>
        <img
          className={css.img}
          style={{ height: "70px", width: "70px" }}
          src={icon}
        ></img>
        <p className={css.text}>{text}</p>
      </div>
    </>
  );
}
