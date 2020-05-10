import React, { useState } from "react";
import Calendar from "react-calendar";

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  function onChange(e) {
    setDate(e.target.value);
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}
