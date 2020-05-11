import css from "./TutorDetails.module.css";
import StarRating from "../../../StarRating/StarRating";
import { useEffect } from "react";
export default function TutorDetails({ item }) {
  return (
    <>
      <div className={css.detailsContainer}>
        <h2 className={css.name}>
          {item.firstName} {item.lastName}
        </h2>
        <div className={css.rating}>
          <StarRating
            size="small"
            defaultValue={Math.ceil(Math.random() * 3) * 2}
          />
        </div>
        <span className={css.review}>12 Reviews</span>
        <h3 className={css.locationTitle}>Location</h3>
        <p className={css.location}>{item.tutorLocation}</p>
        <h3 className={css.subjectTitle}>Subject</h3>
        <p className={css.subject}>{item.subjects}</p>
        <h3 className={css.educationTitle}>Education</h3>
        <p className={css.education}>{item.teachingLevel}</p>
        <h3 className={css.experienceTitle}>Years of Experience</h3>
        <p className={css.experience}>{item.experience}</p>
      </div>
    </>
  );
}
