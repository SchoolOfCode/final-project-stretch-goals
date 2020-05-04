import css from "./NavBar.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import { useState } from "react";
import LoginWindow from "../LoginWindow/LoginWindow";

export default function NavBar({ toggleLogin }) {
  const [displayLogin, setDisplayLogin] = useState(false);

  function toggleLogin() {
    setDisplayLogin(!displayLogin);
  }

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
          text="Login / Create Account"
          handleClick={toggleLogin}
        />
      </div>
      <Link href="/search">
        <div className={css.searchField}>
          <Button text="Search Tutors" />
        </div>
      </Link>
      {displayLogin && (
        <div
          style={{
            position: "absolute",
            paddingLeft: "25vw",
            paddingTop: "20vh",
          }}
        >
          <LoginWindow setDisplayLogin={setDisplayLogin} />
        </div>
      )}
    </div>
  );
}
