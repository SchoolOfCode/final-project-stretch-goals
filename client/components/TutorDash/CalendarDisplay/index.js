import CalendarComponent from "../CalendarComponent";

export default function CalendarDisplay({ bookings }) {
  return (
    <>
      <CalendarComponent bookings={bookings} />
    </>
  );
}
