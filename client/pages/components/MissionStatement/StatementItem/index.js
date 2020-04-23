import { css } from "@material-ui/system";

export default function StatementItem({ text }) {
  return (
    <>
      <img
        style={{ height: "70px", width: "70px", marginRight: "3vw" }}
        src="https://image.flaticon.com/icons/svg/566/566985.svg"
      ></img>
      <p className={css.text}>{text}</p>
    </>
  );
}
