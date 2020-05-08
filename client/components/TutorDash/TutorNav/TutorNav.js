import Button from "../../Button/Button";
import css from "./TutorNav.module.css";

export default function TutorNav({ setContentShown }) {
  return (
    <ul style={{ listStyle: "none" }}>
      <li className={css.li}>
        <Button
          height="50px"
          handleClick={() => setContentShown(1)}
          text="Lesson Management"
        />
      </li>
      <li className={css.li}>
        <Button
          height="50px"
          handleClick={() => setContentShown(2)}
          text="Edit Profile"
        />
      </li>
      <li className={css.li}>
        <Button
          height="50px"
          handleClick={() => setContentShown(3)}
          text="Calendar"
        />
      </li>
      <li className={css.li}>
        <Button
          height="50px"
          handleClick={() => setContentShown(4)}
          text="Learning Resources"
        />
      </li>
    </ul>
  );
}
