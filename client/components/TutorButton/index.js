import css from "./TutorButton.module.css";

export default function Button({
  text,
  handleClick,
  className,
  height,
  width,
  color,
}) {
  return (
    <div
      style={{ height: height, width: width, color: color }}
      className={(className, css.buttonTemplate)}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
