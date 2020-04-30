import Button from "../../Button/Button";

export default function TutorNav({ setContentShown }) {
  return (
    <ul>
      <li>
        <Button
          handleClick={() => setContentShown(1)}
          text="Lesson Management"
        />
      </li>

      <li>
        <Button
          handleClick={() => setContentShown(2)}
          text="Account Settings"
        />
      </li>
      <li>
        <Button
          handleClick={() => setContentShown(3)}
          text="Profile Settings"
        />
      </li>
      <li>
        <Button handleClick={() => setContentShown(4)} text="Calendar" />
      </li>
    </ul>
  );
}
