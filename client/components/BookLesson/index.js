import { useState } from "react";
import MaterialUIPickers from "../MaterialUIPickers";
import css from "./BookLesson.module.css";
import Button from "../Button/Button";

export default function BookLesson({ setBookLessonDisplay }) {
  const [booked, setBooked] = useState(false);
  const [confirmationDisplayed, setConfirmationDisplayed] = useState(false);
  const [notes, setNotes] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleChange(e) {
    setNotes(e.target.value);
    console.log(notes);
  }

  function onClick() {
    setBooked(true);
    console.log("booking confirmed");
    // postBooking()
  }

  //POST request to send booking to server to be stored in the backend.
  // async function postBooking() {
  //   const res = await fetch("this will be a url AWS", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       body: JSON.stringify({
  //         selectedDate,
  //         notes
  //       })
  //     }
  //   });
  //   const data = await res.json();
  // }

  return (
    <>
      <div className={css.bookingCard}>
        <h2 className={css.header}>
          Please select your preferred date and time for your lesson
        </h2>
        <div
          onClick={() => {
            setBookLessonDisplay(false);
          }}
          className={css.closeWindow}
        >
          x
        </div>
        <div className={css.picker}>
          <MaterialUIPickers
            confirmationDisplayed={confirmationDisplayed}
            setConfirmationDisplayed={setConfirmationDisplayed}
            setBooked={setBooked}
            booked={booked}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        {confirmationDisplayed && (
          <p className={css.confirmation}>
            You have selected an appointment at
            {` ` +
              JSON.stringify(selectedDate)
                .split("")
                .slice(1, 11)
                .join("") +
              ` at ` +
              JSON.stringify(selectedDate)
                .split("")
                .slice(12, 21)
                .join("")}
          </p>
        )}
        <div className={css.notes}>
          <h4>Notes for your tutor:</h4>
          <textarea
            placeHolder="Please leave some notes for your tutor here"
            className={css.inputField}
            value={notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={css.button}>
          <Button text="Confirm Booking" width="35%" handleClick={onClick} />
        </div>
        {booked && (
          <div className={css.booking}>Booking confirmed. Thank you</div>
        )}
      </div>
    </>
  );
}
