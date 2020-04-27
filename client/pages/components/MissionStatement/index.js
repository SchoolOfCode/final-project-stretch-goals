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
    {
      classTitle: "topLeft",
      text:
        "We offer a myriad of subjects taught at different levels by over 2,000 tutors. Whether you want to learn GCSE Maths or Grade 8 ukelele, it is easy to find a tutor who can help you based on your learning goals and interests.",
      imageUrl: "image",
    },
    {
      classTitle: "topRight",
      text:
        "At Doceo, we believe you shouldn't have to pay more than you can afford for a lesson. On Doceo you only pay for each lesson you book, at a price that is within your budget",
      imageUrl: "image",
    },
    { classTitle: "bottomLeft", text: "bottom left", imageUrl: "image" },
    { classTitle: "bottomRight", text: "bottom right", imageUrl: "image" },
  ];

  return (
    <div className={css.mainContainer}>
      {statements.map((item) => {
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
