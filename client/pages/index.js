import Navbar from "../components/NavBar/NavBar";
import MissionStatement from "../components/MissionStatement";
import Head from "next/head";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial/index";
import { useState } from "react";
import Home from "./search";
import css from "./index.module.css";
import SearchTutors from "../components/SearchTutors/SearchTutors";
import SearchTutorsWithFilters from "../components/SearchTutorsWithFilters/SearchTutorsWithFilters";

export default function Homepage() {
  const [subject, setSubject] = useState(false);
  const [searchBoolean, setSearchBoolean] = useState(false);
  const [searchResultsData, setSearchResultsData] = useState([]);
  return (
    <>
      <Head>
        <title>Doceo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setSearchBoolean={setSearchBoolean} />
      {searchBoolean ? (
        <div className={css.mainContainer}>
          <div className={css.gridContainer}>
            <SearchTutorsWithFilters
              searchResultsData={searchResultsData}
              setSearchResultsData={setSearchResultsData}
              subject={subject}
              setSubject={setSubject}
            />
          </div>
        </div>
      ) : (
        <>
          <div className={css.mainContainer}>
            <div className={css.gridContainer}>
              <SearchTutors
                setSearchResultsData={setSearchResultsData}
                subject={subject}
                setSubject={setSubject}
                setSearchBoolean={setSearchBoolean}
                searchBoolean={searchBoolean}
              />
            </div>
          </div>
          <MissionStatement />
          <HowItWorks />
          <Testimonial />
        </>
      )}
    </>
  );
}
