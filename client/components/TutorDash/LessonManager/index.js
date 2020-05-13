import { useState, useEffect } from "react";
import css from "./LessonManager.module.css";
import Button from "../../Button/Button";

export default function LessonManager({ setBookings, bookings }) {
  function deleteBooking(i) {
    setBookings([...bookings.slice(0, i), ...bookings.slice(i + 1)]);
  }

  // function to make a DELETE to BOOKINGS table in backend. Will need to delete booking by ID
  // async function backendBookingDelete() {
  //   const res = await fetch("/*URL for bookings table */", {
  //     method: "delete"
  //   });
  //   const data = await res.json();
  // }

  return (
    <>
      <div className={css.mainContainer}>
        <h1 className={css.h1}>Upcoming Bookings</h1>
        <ul style={{ listStyleType: "none" }}>
          {bookings.map((item, i) => {
            return (
              <li>
                <div className={css.bookingCard}>
                  <div className={css.date}>
                    {item.dates
                      .split("")
                      .slice(0, 10)
                      .join("")}
                  </div>
                  <div className={css.time}>
                    {item.dates
                      .split("")
                      .slice(11, 16)
                      .join("")}
                  </div>
                  <div className={css.name}>{item.studentName}</div>

                  <div>Email Contact: {item.emailAddress}</div>
                  <div className={css.notes}>Notes: {item.notes}</div>
                  <div className={css.buttons}>
                    <Button text="Confirm" />
                    <Button
                      text="Delete"
                      handleClick={() => deleteBooking(i)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
