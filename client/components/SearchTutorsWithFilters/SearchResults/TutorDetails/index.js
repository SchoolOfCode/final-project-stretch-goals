import css from "./TutorDetails.module.css";
import Button from "../../../Button/Button";
export default function TutorDetails({
  item,
  setBookLessonDisplay,
  bookLessonDisplay,
}) {
  function handleClick() {
    setBookLessonDisplay(true);
  }

  return (
    <>
      <div className={css.detailsContainer}>
        <p>Location: {item.tutorLocation}</p>
        <p>Subject: {item.subjects}</p>
        <p>Education: {item.teachingLevel}</p>
        <p>Years of Experience: {item.experience}</p>
      </div>

      <div className={css.book}>
        <h3 className={css.price}>Price: £{item.price}p/h</h3>
        <div className={css.buttonContainer}>
          <Button text="Book Now" handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}
