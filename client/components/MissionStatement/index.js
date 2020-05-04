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
        "We started this project with the aim of making a space for Tutors and Students to be able to connect. We believe that in these trying times, students should access to private tutoring, and it should be available to anyone, anywhere.",
      imageUrl: "image"
    },
    {
      classTitle: "topRight",
      text:
        "At Doceo, we believe you shouldn't have to pay more than you can afford for a lesson. On Doceo you only pay for each lesson you book at a price that is within your budget, so you can focus on learning.",
      imageUrl: "image",
    },
    {
      classTitle: "bottomLeft",
      text:
        "Book classes that fit around your schedule. As our lessons are all online, you don't need to worry about travelling to meet a tutor.",
      imageUrl: "image",
    },
    {
      classTitle: "bottomRight",
      text:
        "Our lessons sync with Google calendar, so you don't need to worry about forgetting that you have a lesson next Tuesday. We've got your back.",
      imageUrl: "image",
    },
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
