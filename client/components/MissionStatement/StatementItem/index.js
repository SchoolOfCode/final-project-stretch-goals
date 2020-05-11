//import { css } from "@material-ui/system";
import css from "./StatementItem.module.css";

export default function StatementItem({ text }) {
  return (
    <>
      <div className={css.container}>
        <img
          className={css.img}
          style={{ height: "70px", width: "70px" }}
          src="https://image.flaticon.com/icons/svg/566/566985.svg"
        ></img>
        <p className={css.text}>{text}</p>
      </div>
    </>
  );
}
