import css from "./NavBar.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import Cognito from "../Cognito/Cognito";
const AWS = require("aws-sdk");
import { useAuth } from "../../auth";

export default function NavBar({ setSearchBoolean }) {
  const auth = useAuth();
  console.log("Auth: ", auth ? auth.idTokenData.sub : null);

  return (
    <div className={css.navBarContainer}>
      <div className={css.loggedIn}>
        <p>
          {auth ? `Logged in as: ${auth.idTokenData.email}` : "Not logged in"}
        </p>
      </div>
      <div
        onClick={() => {
          window.location.href = "/";
          setSearchBoolean(false);
        }}
        className={css.title}
      >
        <Link href="/">
          <h1 className={css.doceo}>DOCEO</h1>
        </Link>
      </div>

      <div className={css.loginButton}>
        <Cognito />
      </div>
      {auth ? (
        <Link href="/tutorDashPage">
          <div className={css.searchField}>
            <Button text="Your Dashboard" />
          </div>
        </Link>
      ) : null}
    </div>
  );
}
