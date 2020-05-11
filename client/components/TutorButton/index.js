import css from "./TutorButton.module.css";

export default function Button({
  text,
  handleClick,
  className,
  height,
  width
}) {
  return (
    <div
      style={{ height: height, width: width }}
      className={(className, css.buttonTemplate)}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
