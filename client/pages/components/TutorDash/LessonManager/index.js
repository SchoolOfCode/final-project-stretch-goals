import { useState } from "react";
import css from "./LessonManager.module.css";
import Button from "../../Button/Button";

let dummyData = [
  {
    date: "2020/06/21",
    studentName: "Patrick Young",
    subject: "English",
    notes: "I want to learn about The Tempest, becuase i love Caliban"
  },
  {
    date: "2020/06/21",
    studentName: "Cat Mayne ",
    subject: "Russian",
    notes: "Good evening Comrade"
  },
  {
    date: "2020/05/03",
    studentName: "Ravi Chahal",
    subject: "Stocks and Shares",
    notes: "I am the teacher now"
  },
  {
    date: "2020/05/05",
    studentName: "Mark Gilligan",
    subject: "Animal Crossing",
    notes: "I have a kitchen"
  }
];

export default function LessonManager() {
  const [bookings, setBookings] = useState(dummyData);

  function deleteBooking(i) {
    setBookings([...bookings.slice(0, i), ...bookings.slice(i + 1)]);
    backendBookingDelete();
  }

  // //function to fetch data from BOOKINGS table. To be displayed in UI
  // async function getBookings() {
  //   const res = await fetch(/*"url for our bookings database/id"*/);
  //   const data = await res.json();
  //   // setbookings(data)
  // }

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
        <h1 className={css.h1}>Upcoming Bookings:</h1>
        <ul style={{ listStyleType: "none" }}>
          {bookings.map((item, i) => {
            return (
              <li>
                <div className={css.bookingCard}>
                  <div className={css.date}>
                    <div>{item.date}</div>
                    <div>Subject: {item.subject}</div>
                  </div>
                  <div className={css.name}>{item.studentName}</div>
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
