import { useState } from "react";
import css from "./TutorDetails.module.css";
import Button from "../../../Button/Button";
export default function TutorDetails({
  item,
  setBookLessonDisplay,
  bookLessonDisplay,
}) {
  function handleClick() {
    setBookLessonDisplay(!bookLessonDisplay);
  }

  return (
    <>
      <div className={css.detailsContainer}>
        <p>Location: {item.tutorLocation}</p>
        <p>Subject: {item.subjects}</p>
        <p>Level: {item.teachingLevel}</p>
        <p>Experience: {item.experience}</p>
      </div>

      <div className={css.book}>
        <h3 className={css.price}>Price: £{item.price}p/h</h3>
        <Button text="Book Now" height="30px" handleClick={handleClick} />
      </div>
    </>
  );
}
