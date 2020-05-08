import css from "./NavBar.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import { useState } from "react";
import Cognito from "../Cognito/Cognito";
const AWS = require("aws-sdk");
import { useAuth } from "../../auth";

export default function NavBar() {
  const auth = useAuth();
  console.log("damn daaaayyyyniel", auth ? auth.idTokenData.sub : null);

  return (
    <div className={css.navBarContainer}>
      <div className={css.title}>
        <Link href="/">
          <h1 className={css.doceo}>Doceo</h1>
        </Link>
      </div>

      <div className={css.loginButton}>
        <Cognito />
      </div>
      <Link href="/search">
        <div className={css.searchField}>
          <Button text="Search Tutors" />
        </div>
      </Link>
    </div>
  );
}
