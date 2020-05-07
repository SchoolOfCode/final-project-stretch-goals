import css from "./NavBar.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import { useState } from "react";
import LoginWindow from "../LoginWindow/LoginWindow";
import Cognito from "../Cognito/Cognito";
const AWS = require("aws-sdk");
import { useAuth } from "../../auth";

export default function NavBar() {
  const [displayLogin, setDisplayLogin] = useState(false);
  const auth = useAuth();
  console.log("damn daaaayyyyniel", auth ? auth.idTokenData.sub : null);
  console.log("auth", auth);

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
        <Cognito />

        {/* 
        OLD LOGIN BUTTON
        
        <Button
          className={css.actualButton}
          text="Login / Create Account"
          handleClick={toggleLogin}
        /> */}
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
            paddingTop: "20vh"
          }}
        >
          <LoginWindow setDisplayLogin={setDisplayLogin} />
        </div>
      )}
    </div>
  );
}
