import MaterialUIPickers from "../MaterialUIPickers";
import css from "./BookLesson.module.css";

export default function BookLesson() {
  return (
    <>
      <div className={css.bookingCard}>
        <h1 className={css.header}>
          Please select a time date and time slot for your lesson with: Tutor
          Name
        </h1>
        <div className={css.picker}>
          <MaterialUIPickers />
        </div>
      </div>
    </>
  );
}
