import { useState } from "react";
import TutorDisplay from "./TutorDisplay";
import TutorAbout from "./TutorAbout";
import css from "./SearchResults.module.css";
import TutorDetails from "./TutorDetails";

export default function SearchResults({ searchResultsData }) {
  return (
    <ul className={css.resultsListContainer}>
      {searchResultsData.map((item, i) => {
        return (
          <li key={i}>
            <div className={css.tutorContainer}>
              <TutorDisplay item={item} />

              <TutorAbout item={item} />

              <TutorDetails item={item} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
