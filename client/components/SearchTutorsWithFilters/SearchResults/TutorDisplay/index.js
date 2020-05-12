import css from "./TutorDisplay.module.css";
import Button from "../../../Button/Button";
export default function TutorDisplay({ item, setBookLessonDisplay }) {
  function handleClick() {
    setBookLessonDisplay(true);
  }
  return (
    <div className={css.container}>
      <img
        className={`${css.tutorImage} ${css.itemAlign}`}
        src={item.imageURL}
      />
      <div className={`${css.tutorRating} ${css.itemAlign}`}></div>
      <div className={css.book}>
        <h3 className={css.price}>Price: £{item.price}p/h</h3>
        <div className={css.buttonContainer}>
          <Button text="Book Now" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
