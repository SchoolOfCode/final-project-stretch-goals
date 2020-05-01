import css from "./LessonManager.module.css";
import Button from "../../Button/Button";

export default function LessonManager() {
  const bookings = [
    {
      date: "2020/06/21",
      studentName: "Patrick Young",
      subject: "English",
      notes: "I want to learn about The Tempest, becuase i love Caliban"
    }
  ];

  return (
    <>
      <h1>Upcoming Lessons</h1>
      <div className={css.mainContainer}>
        <ul style={{ listStyleType: "none" }}>
          {bookings.map(item => {
            return (
              <li>
                <div className={css.bookingCard}>
                  <div className={css.date}>{item.date}</div>
                  <div className={css.name}>{item.studentName}</div>
                  <div className={css.subject}>{item.subject}</div>
                  <div className={css.notes}>{item.notes}</div>
                  <div className={css.buttons}>
                    <Button text="Confirm" />
                    <Button text="Delete" />
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
