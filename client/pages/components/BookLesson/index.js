import MaterialUIPickers from "../MaterialUIPickers";
import css from "./BookLesson.module.css";

export default function BookLesson() {
  const [confirmationDisplayed, setConfirmationDisplayed] = React.useState(
    false
  );
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-04-30 14:49:54")
  );
  //const dateArray = [selectedDate];

  return (
    <>
      <div className={css.bookingCard}>
        <h3 className={css.header}>
          Please select your preferred date and time for your lesson
        </h3>
        <div className={css.picker}>
          {console.log(typeof selectedDate)}
          <MaterialUIPickers
            confirmationDisplayed={confirmationDisplayed}
            setConfirmationDisplayed={setConfirmationDisplayed}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          {confirmationDisplayed && (
            <p className={css.confirmation}>
              You have booked an appointment for {JSON.stringify(selectedDate)}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
