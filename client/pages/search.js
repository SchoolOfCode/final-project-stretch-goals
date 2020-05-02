import Head from "next/head";
import { useState } from "react";
import css from "./index.module.css";
import Navbar from "./components/NavBar/NavBar";
import SearchTutors from "./components/SearchTutors/SearchTutors";
import SearchTutorsWithFilters from "./components/SearchTutorsWithFilters/SearchTutorsWithFilters";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import Link from "next/link";

export default function Home() {
  const [subject, setSubject] = useState("English");
  const [searchBoolean, setSearchBoolean] = useState(false);
  const [searchResultsData, setSearchResultsData] = useState([]);
  const [displayLogin, setDisplayLogin] = useState(false);

  function toggleLogin() {
    setDisplayLogin(true);
  }

  return (
    <div className={css.mainContainer}>
      <Head>
        <title>Doceo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar toggleLogin={toggleLogin} />

      <div className={css.gridContainer}>
        {searchBoolean ? (
          <SearchTutorsWithFilters
            searchResultsData={searchResultsData}
            setSearchResultsData={setSearchResultsData}
            subject={subject}
            setSubject={setSubject}
          />
        ) : (
          <SearchTutors
            setSearchResultsData={setSearchResultsData}
            subject={subject}
            setSubject={setSubject}
            setSearchBoolean={setSearchBoolean}
            searchBoolean={searchBoolean}
          />
        )}
        "
        {displayLogin ? (
          <div
            style={{
              position: "absolute",
              paddingLeft: "25vw",
              paddingTop: "20vh",
            }}
          >
            <LoginWindow setDisplayLogin={setDisplayLogin} />{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
}
