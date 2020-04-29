import css from "./Button.module.css";

export default function Button({ text, handleClick, className, height }) {
  return (
    <div
      style={{ height: height }}
      className={(className, css.buttonTemplate)}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
