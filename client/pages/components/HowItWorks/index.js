import css from "./HowItWorks.module.css";
import StepDisplay from "./StepDisplay/index";

export default function HowItWorks() {
  const steps = [
    {
      classTitle: "one",
      image: "image",
      head: "1) Choose a tutor",
      text:
        "Watch tutors' introduction videos, and read reviews by students to find the tutor who best suits your learning needs and style."
    },
    {
      classTitle: "two",
      image: "image",
      head: "2) Book your lesson",
      text:
        "Choose a lesson length, time, and day that suits you using our at-a-glance calendar. When your tutor confirms the lesson is on, the lesson appears in your calendar so you won't forget."
    },
    {
      classTitle: "three",
      image: "image",
      head: "3) Learn with us",
      text:
        "Start your learning journey with your tutor using the agreed video call software."
    },
    {
      classTitle: "four",
      image: "image",
      head: "4) Leave a review",
      text:
        "After each lesson, both student and tutor can leave a rating and review of the lesson. This keeps our community standards high."
    }
  ];

  return (
    <div className={css.mainContainer}>
      <h1 className={css.how}></h1>
      {steps.map(item => {
        return (
          <div className={css[item.classTitle]}>
            <StepDisplay image={item.image} head={item.head} text={item.text} />
          </div>
        );
      })}
    </div>
  );
}
