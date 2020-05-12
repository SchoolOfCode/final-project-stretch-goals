import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers({
  selectedDate,
  setSelectedDate,
  setConfirmationDisplayed,
  booked,
  setBooked,
  confirmationDisplayed,
  format,
  disablePast
}) {
  // The first commit of Material-UI

  const handleDateChange = date => {
    setSelectedDate(date);
    setConfirmationDisplayed(true);
    console.log(JSON.stringify(selectedDate));
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker"
            label="Date"
            format={format}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            selectedDateProp={selectedDate}
            disablePast={disablePast}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time"
            minutesStep={15}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
            selectedDateProp={selectedDate}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
}
