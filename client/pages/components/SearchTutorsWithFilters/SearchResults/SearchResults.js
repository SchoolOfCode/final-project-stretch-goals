import {useState} from "react"
import css from "./SearchResults.module.css";


export default function SearchResults({ searchResultsData }) {
  const [showEducation, setShowEducation] = useState(false)

  function handleBioClick(){
    setShowEducation(!showEducation)
  }
  return (
    <ul className={css.resultsListContainer}>
      {searchResultsData.map((x, i) => {
        return (
          <li key={i}>
          <div className={css.tutorContainer}>
            <h1 className={css.tutorTitle}>{x.firstName} {x.lastName}</h1>
            <img className={css.tutorImage} src={x.imageURL}/>
            <p className={css.tutorRating}>Rating: {x.rating}</p>
<div className={css.detailsContainer}>
            <p className={css.tutorLocation}>Location: {x.location}</p>
            <p className={css.tutorSubject}>Subject: {x.subjects}</p>
            <p className={css.tutorLevel}>Level: {x.level}</p>
            <p className={css.tutorExperience}>Experience: {x.experience}</p>
            <p className={css.tutorPrice}>Price: £{x.price}p/h</p>
</div>
<div className={css.tutorBioContainer}>
            <h3 onClick={handleBioClick} className={css.tutorBioTitle}>About Me</h3>
            <h3 onClick={handleBioClick} className={css.tutorEducationTitle}>Education</h3>
            {!showEducation ? <p className={css.tutorBio}>{x.biography}</p>:
            <p className={css.tutorEducation}>Might have a section here to show what my educational background is, where ive studied etc...</p>}
</div>
            <button className={css.bookButton}> Book Now </button>
            <button className={css.viewButton}> View Profile </button>
          </div>
          </li>
        );
      })}
    </ul>
  );
}
