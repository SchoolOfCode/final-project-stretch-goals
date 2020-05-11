import css from "./StepDisplay.module.css";

export default function StepDisplay({ text, image, head }) {
  return (
    <div className={css.container}>
      <img src={image} className={css.imageContainer} />
      <div className={css.head}>
        <h3>{head}</h3>
      </div>
      <div className={css.textDiv}>{text}</div>
    </div>
  );
}
