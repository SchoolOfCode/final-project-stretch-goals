import { useState } from "react";
import MaterialUIPickers from "../MaterialUIPickers";
import css from "./BookLesson.module.css";
import Button from "../Button/Button";
import Input from "../InputField/InputField";

export default function BookLesson({ setBookLessonDisplay }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formState, setFormState] = useState(initialState);
  const [booked, setBooked] = useState(false);
  const [confirmationDisplayed, setConfirmationDisplayed] = useState(false);

  const initialState = {
    studentName: "",
    emailAddress: "",
    notes: "",
    dates: selectedDate
  };

  function handleChange(e) {
    e.persist();
    const newState = e.target.value;
    const name = e.target.name;
    setFormState(oldState => ({
      ...oldState,
      [name]: newState,
      dates: selectedDate
    }));
    console.log(formState);
  }

  function onClick() {
    setBooked(true);
    postBooking();
  }

  //POST request to send booking to server to be stored in the backend.
  async function postBooking() {
    console.log(formState);
    const res = await fetch(
      "https://w8pdncxe7i.execute-api.eu-west-1.amazonaws.com/dev/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }
    );
    const data = await res.json();
  }

  return (
    <>
      <div className={css.bookingCard}>
        {booked ? (
          <>
            <div
              onClick={() => {
                setBookLessonDisplay(false);
              }}
              className={css.closeWindow}
            >
              x
            </div>
            <div className={css.booking}>
              <div className={css.confirm}></div>
              <h1 className={css.confirmHeader}>Booking slot confirmed</h1>
            </div>
          </>
        ) : (
          <>
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
                disablePast={true}
                confirmationDisplayed={confirmationDisplayed}
                setConfirmationDisplayed={setConfirmationDisplayed}
                setBooked={setBooked}
                booked={booked}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                format="dd/MM/yyy"
              />
            </div>
            {confirmationDisplayed && (
              <p className={css.confirmation}>
                You have selected an appointment at
                {selectedDate.toLocaleTimeString()} on
                {selectedDate.toLocaleDateString()}
              </p>
            )}
            <div className={css.name}>
              <Input
                label="Name"
                type="text"
                name="studentName"
                onChange={handleChange}
              />
            </div>
            <div className={css.email}>
              <Input
                label="Contact Email"
                type="text"
                name="emailAddress"
                onChange={handleChange}
              />
            </div>
            <div className={css.notes}>
              <h4>Notes for your tutor:</h4>
              <textarea
                placeHolder="Please leave some notes for your tutor here"
                className={css.inputField}
                onChange={handleChange}
                name="notes"
              ></textarea>
            </div>

            <div className={css.button}>
              <Button
                text="Confirm Booking"
                width="35%"
                handleClick={onClick}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
