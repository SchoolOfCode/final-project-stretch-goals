import css from "./CreateAccountButton.module.css";

export default function CreateAccountButton({ text, title, handleClick }) {
  return (
    <div onClick={handleClick} className={css.mainContainer}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
