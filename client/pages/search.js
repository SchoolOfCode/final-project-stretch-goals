import Head from "next/head";
import { useState } from "react";
import css from "./index.module.css";
import Navbar from "../components/NavBar/NavBar";
import SearchTutors from "../components/SearchTutors/SearchTutors";
import SearchTutorsWithFilters from "../components/SearchTutorsWithFilters/SearchTutorsWithFilters";

export default function Home() {
  const [subject, setSubject] = useState(false);
  const [searchBoolean, setSearchBoolean] = useState(false);
  const [searchResultsData, setSearchResultsData] = useState([]);

  return (
    <div className={css.mainContainer}>
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
      </div>
    </div>
  );
}
