import TutorButton from "../../TutorButton";
import css from "./TutorNav.module.css";
import book from "../../../images/SVG/book.svg";
import calendar from "../../../images/SVG/calendar.svg";
import breifcase from "../../../images/SVG/briefcase.svg";
import person from "../../../images/SVG/person.svg";

export default function TutorNav({ setContentShown, contentShown }) {
  var color1;
  var color2;
  var color3;
  var color4;
  if (contentShown == 1) {
    color1 = "var(--theme-color-2)";
  } else if (contentShown == 2) {
    color2 = "var(--theme-color-2)";
  } else if (contentShown == 3) {
    color3 = "var(--theme-color-2)";
  } else color4 = "var(--theme-color-2)";

  return (
    <ul style={{ listStyle: "none" }}>
      <li className={css.li}>
        <img src={book} />
        <TutorButton
          color={color1}
          height="26px"
          handleClick={() => setContentShown(1)}
          text="Lesson Management"
        />
      </li>
      <li className={css.li}>
        <img src={person} />
        <TutorButton
          color={color2}
          height="26px"
          handleClick={() => setContentShown(2)}
          text="Edit Profile"
        />
      </li>
      <li className={css.li}>
        <img src={calendar} />
        <TutorButton
          color={color3}
          height="26px"
          handleClick={() => setContentShown(3)}
          text="Calendar"
        />
      </li>
      <li className={css.li}>
        <img src={breifcase} />
        <TutorButton
          color={color4}
          height="26px"
          handleClick={() => setContentShown(4)}
          text="Teaching Resources"
        />
      </li>
    </ul>
  );
}
