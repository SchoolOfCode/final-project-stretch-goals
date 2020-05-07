import css from "./NavBar.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import { useState } from "react";
import LoginWindow from "../LoginWindow/LoginWindow";
import Cognito from "../Cognito/Cognito";
const AWS = require("aws-sdk");

export default function NavBar() {
  const [displayLogin, setDisplayLogin] = useState(false);

  // console.log(
  //   "1) User Attributes",
  //   event.request.userAttributes
  //     ? event.request.userAttributes
  //     : "it's undefined"
  // );
  // console.log("2) idTokenData.email", idTokenData.email);
  // console.log("3) Object.idTokenData.email", Object.idTokenData.email);
  // console.log("3.5) object.idTokenData.email", object.idTokenData.email);
  // console.log("4)  idTokenData", idTokenData);
  console.log("5)  Object.idTokenData", Object.idTokenData);
  var identityId = AWS.config.credentials;
  console.log("id = ", identityId);
  // console.log("6)  object.idTokenData", object.idTokenData);

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
