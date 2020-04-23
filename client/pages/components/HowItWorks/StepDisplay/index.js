//import { css } from "@material-ui/system";
import css from "./StepDisplay.module.css";

export default function StepDisplay({ text, image }) {
  return (
    <div>
      <div className={css[image]}></div>
      <div className={css.textDiv}>{text}</div>
      <div className={css.arrow}></div>
    </div>
  );
}
