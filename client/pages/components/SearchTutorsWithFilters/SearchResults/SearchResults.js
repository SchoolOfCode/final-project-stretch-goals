import { useState } from "react";
import css from "./SearchResults.module.css";

export default function SearchResults({ searchResultsData }) {
  const [showContent, setShowContent] = useState(1);

  function handleContentClick(e) {
    console.log(e);
    if (e.name === "video") {
      setShowContent(1);
    } else if (e.name === "about") {
      setShowContent(2);
    } else setShowContent(3);
  }
  return (
    <ul className={css.resultsListContainer}>
      {searchResultsData.map((x, i) => {
        return (
          <li key={i}>
            <div className={css.tutorContainer}>
              <div className={css.tutorProfile}>
                <h1 className={css.tutorTitle}>
                  {x.firstName} {x.lastName}
                </h1>
                <img className={css.tutorImage} src={x.imageURL} />
                <p className={css.tutorRating}>Rating: {x.rating}</p>
              </div>
              <div className={css.tutorAbout}>
                <h3
                  onClick={handleContentClick}
                  className={css.tutorEducationTitle}
                  name="video"
                >
                  Video
                </h3>
                <h3
                  onClick={handleContentClick}
                  className={css.tutorEducationTitle}
                  name="about"
                >
                  About Me
                </h3>
                <h3
                  onClick={handleContentClick}
                  className={css.tutorEducationTitle}
                  name="testomonials"
                >
                  Testomonials
                </h3>
                <div className={css.aboutContent}>
                  {showContent === 1 ? <p>IM A VIDEO</p> : null}
                  {showContent === 2 ? <p>{x.bio}</p> : null}
                  {showContent === 3 ? <p>IM A TESTOMONIAL</p> : null}
                </div>
              </div>
            </div>
            <div className={css.tutorDetails}>
              <h3>Details</h3>
              <p className={css.tutorLocation}>Location: {x.location}</p>
              <p className={css.tutorSubject}>Subject: {x.subjects}</p>
              <p className={css.tutorLevel}>Level: {x.level}</p>
              <p className={css.tutorExperience}>Experience: {x.experience}</p>
              <p className={css.tutorPrice}>Price: £{x.price}p/h</p>

              <button className={css.bookButton}> Book Now </button>
              <button className={css.viewButton}> View Profile </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
