import React, { useState } from "react";
import css from "./CalendarDisplay.module.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

const locales = {
  "en-GB": require("date-fns/locale/en-GB")
};

export default function CalendarComponent({ bookings }) {
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  });

  const myEventsList = bookings.map(item => ({
    start: item.dates,
    end: item.dates,
    title: item.studentName
  }));

  function setEventList() {
    console.log("test", bookings);
    console.log("myEventsList", myEventsList);
  }
  setEventList();

  return (
    <div className={css.mainContainer}>
      <div className={css.calendarContainer}>
        <h1 className={css.title}>Calendar</h1>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, color: "#ff7850" }}
        />
      </div>
    </div>
  );
}
