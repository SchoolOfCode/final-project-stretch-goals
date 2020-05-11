import { useState } from "react";
import TutorDisplay from "./TutorDisplay";
import TutorAbout from "./TutorAbout";
import css from "./SearchResults.module.css";
import TutorDetails from "./TutorDetails";
import BookLesson from "../../BookLesson";

export default function SearchResults({ searchResultsData }) {
  const [bookLessonDisplay, setBookLessonDisplay] = useState(false);
  return (
    <>
      {bookLessonDisplay && (
        <BookLesson
          setBookLessonDisplay={setBookLessonDisplay}
          searchResultsData={searchResultsData}
        />
      )}
      <ul className={css.resultsListContainer}>
        {searchResultsData.map((item, i) => {
          return (
            <li key={i}>
              <div className={css.tutorContainer}>
                <TutorDisplay item={item} />

                <TutorAbout item={item} />

                <TutorDetails
                  setBookLessonDisplay={setBookLessonDisplay}
                  bookLessonDisplay={bookLessonDisplay}
                  item={item}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
