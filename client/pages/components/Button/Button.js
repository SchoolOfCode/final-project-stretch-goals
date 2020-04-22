import css from "./Button.module.css";

export default function Button({ text, handleClick, className }) {
  console.log(handleClick);
  return (
    <div className={(className, css.buttonTemplate)} onClick={handleClick}>
      {text}
    </div>
  );
}
