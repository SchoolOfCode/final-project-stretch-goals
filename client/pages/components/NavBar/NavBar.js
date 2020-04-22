import css from "./NavBar.module.css";

export default function NavBar({ toggleLogin }) {
  return (
    <div className={css.navBarContainer}>
      <div className={css.title}>
        <h1>Doceo</h1>
      </div>
      <div className={css.loginButton}>
        <button onClick={toggleLogin}>LOGIN</button>
      </div>
      <div className={css.searchField}>
        <input />
      </div>
    </div>
  );
}
