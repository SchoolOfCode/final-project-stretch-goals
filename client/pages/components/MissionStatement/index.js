import StatementItem from "./StatementItem";
//import { css } from "@material-ui/system";
import css from "./MissionStatement.module.css";

// Create an array of objects to map through and generate 4 statement item
// needs a class name
// needs text
// icon (image_url)
// create object for each individual

export default function MissionStatement() {
  const statements = [
    { classTitle: "topLeft", text: "top left", imageUrl: "image" },
    { classTitle: "topRight", text: "top right", imageUrl: "image" },
    { classTitle: "bottomLeft", text: "bottom left", imageUrl: "image" },
    { classTitle: "bottomRight", text: "bottom right", imageUrl: "image" }
  ];

  return (
    <div className={css.mainContainer}>
      {statements.map(item => {
        const { classTitle } = item;
        return (
          <div className={css[classTitle]}>
            <StatementItem text={item.text} imageUrl={item.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}
