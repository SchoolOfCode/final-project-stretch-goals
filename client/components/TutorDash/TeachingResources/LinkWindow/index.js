import css from "./LinkWindow.module.css";

export default function LinkWindow({ logo, resource, url }) {
  return (
    <div className={css.mainContainer}>
      <a href={url}>
        <img src={logo} className={css.imageContainer}></img>
      </a>
      <h3>{resource}</h3>
    </div>
  );
}
