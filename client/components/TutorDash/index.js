import css from "./TutorDash.module.css";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import TutorNav from "./TutorNav/TutorNav";
import LessonManager from "./LessonManager";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import CalendarDisplay from "./CalendarDisplay";
import TeachingResources from "./TeachingResources/index";

export default function TutorDash() {
  const [contentShown, setContentShown] = useState(1);
  const [bookings, setBookings] = useState([]);

  //function to fetch data from BOOKINGS table. To be displayed in UI
  async function getBookings() {
    const res = await fetch(
      "https://w8pdncxe7i.execute-api.eu-west-1.amazonaws.com/dev/bookings"
    );
    const data = await res.json();
    setBookings(data);
    //console.log("data", data);
  }

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <>
      <NavBar />
      <div className={css.mainContainer}>
        <div className={css.navContainer}>
          <TutorNav
            setContentShown={setContentShown}
            contentShown={contentShown}
          />
        </div>
        <div className={css.contentContainer}>
          {contentShown == 1 && (
            <LessonManager bookings={bookings} setBookings={bookings} />
          )}
          {contentShown == 2 && <RegistrationForm />}
          {contentShown == 3 && <CalendarDisplay bookings={bookings} />}
          {contentShown == 4 && <TeachingResources />}
        </div>
      </div>
    </>
  );
}
