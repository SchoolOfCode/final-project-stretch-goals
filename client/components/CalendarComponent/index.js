import React, { useState } from "react";
import Calendar from "react-calendar";
import css from "./CalendarDisplay.module.css";
//import "react-calendar/dist/Calendar.css";

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  function onChange() {
    setDate(date);
  }

  return (
    <div className={css.mainContainer}>
      <div className={css.calendarContainer}>
        <div className={css.title}>Calendar</div>
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
}
