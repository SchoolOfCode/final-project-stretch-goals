import TutorButton from "../../TutorButton";
import css from "./TutorNav.module.css";
import book from "../../../images/SVG/book.svg";
import calendar from "../../../images/SVG/calendar.svg";
import breifcase from "../../../images/SVG/briefcase.svg";
import person from "../../../images/SVG/person.svg";

export default function TutorNav({ setContentShown }) {
  return (
    <ul style={{ listStyle: "none" }}>
      <li className={css.li}>
        <img src={book} />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(1)}
          text="Lesson Management"
        />
      </li>
      <li className={css.li}>
        <img src={person} />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(2)}
          text="Edit Profile"
        />
      </li>
      <li className={css.li}>
        <img src={calendar} />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(3)}
          text="Calendar"
        />
      </li>
      <li className={css.li}>
        <img src={breifcase} />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(4)}
          text="Teaching Resources"
        />
      </li>
    </ul>
  );
}
