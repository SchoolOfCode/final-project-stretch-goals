import css from "./StepDisplay.module.css";

export default function StepDisplay({ text, image, head }) {
  return (
    <div className={css.container}>
      <div className={css.head}>
        <h3>{head}</h3>
      </div>
      <img
        src={require("../../../images/step2.jpg")}
        className={css.imageContainer}
      />
      <div className={css.textDiv}>{text}</div>
    </div>
  );
}
