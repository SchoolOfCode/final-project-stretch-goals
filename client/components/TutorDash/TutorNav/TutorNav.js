import Button from "../../Button/Button";
import css from "./TutorNav.module.css";

export default function TutorNav({ setContentShown }) {
  return (
    <ul>
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
          text="Account Settings"
        />
      </li>
      <li className={css.li}>
        <Button
          height="50px"
          handleClick={() => setContentShown(3)}
          text="Profile Settings"
        />
      </li>
      <li className={css.li}>
        <Button
          height="50px"
          handleClick={() => setContentShown(4)}
          text="Calendar"
        />
      </li>
    </ul>
  );
}
