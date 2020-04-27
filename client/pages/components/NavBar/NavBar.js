import css from "./NavBar.module.css";
import Button from "../Button/Button";
import Link from "next/link";

export default function NavBar({ toggleLogin }) {
  return (
    <div className={css.navBarContainer}>
      <div className={css.title}>
        <Link href="/">
          <h1 className={css.doceo}>Doceo</h1>
        </Link>
      </div>

      <div className={css.loginButton}>
        <Button
          className={css.actualButton}
          text="Login"
          handleClick={toggleLogin}
        />
      </div>
      <div className={css.searchField}>
        <input />
      </div>
    </div>
  );
}
