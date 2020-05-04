//import { css } from "@material-ui/system";
import css from "./StepDisplay.module.css";

export default function StepDisplay({ text, image, head }) {
  return (
    <div>
      <div className={css[image]}></div>
      <div className={css[head]}></div>
      <div className={css.textDiv}>
        {head} {text}
      </div>
    </div>
  );
}
