import css from "./LinkWindow.module.css";

export default function LinkWindow({ logo, resource, url }) {
  return (
    <div className={css.mainContainer}>
      <a href={url}>
        <img src={logo} className={css.imageContainer}></img>
      </a>
      <h3 className={css.resource}>{resource}</h3>
      <p className={css.text}>lorem ipsum woop woop wop wopp wop</p>
    </div>
  );
}
