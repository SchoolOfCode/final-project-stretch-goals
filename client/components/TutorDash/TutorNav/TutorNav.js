import TutorButton from "../../TutorButton";
import css from "./TutorNav.module.css";

export default function TutorNav({ setContentShown }) {
  return (
    <ul style={{ listStyle: "none" }}>
      <li className={css.li}>
        <img />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(1)}
          text="Lesson Management"
        />
      </li>
      <li className={css.li}>
        <img />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(2)}
          text="Edit Profile"
        />
      </li>
      <li className={css.li}>
        <img />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(3)}
          text="Calendar"
        />
      </li>
      <li className={css.li}>
        <img />
        <TutorButton
          height="26px"
          handleClick={() => setContentShown(4)}
          text="Teaching Resources"
        />
      </li>
    </ul>
  );
}
