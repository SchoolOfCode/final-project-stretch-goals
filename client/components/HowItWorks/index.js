import css from "./HowItWorks.module.css";
import arrow from "./StepDisplay/right-arrow.svg";
import StepDisplay from "./StepDisplay/index";
import image1 from "../../images/step1v2.png";
import image2 from "../../images/step2.png";
import image3 from "../../images/step3.png";
import image4 from "../../images/step4.png";

export default function HowItWorks() {
  const steps = [
    {
      classTitle: "one",
      image: image1,
      head: "Choose a tutor",
      text:
        "Watch tutors' introduction videos, and read reviews by students to find the tutor who best suits your learning needs and style.",
    },
    {
      classTitle: "two",
      image: image2,
      head: "Book your lesson",
      text:
        "Choose a lesson length, time, and day that suits you using our at-a-glance calendar. When your tutor confirms the lesson is on, the lesson appears in your calendar so you won't forget.",
    },
    {
      classTitle: "three",
      image: image3,
      head: "Learn with us",
      text:
        "Start your learning journey with your tutor using the agreed video call software.",
    },
    {
      classTitle: "four",
      image: image4,
      head: "Leave a review",
      text:
        "After each lesson, both student and tutor can leave a rating and review of the lesson. This keeps our community standards high.",
    },
  ];

  return (
    <div className={css.mainContainer}>
      <h1 className={css.how}>How it Works</h1>
      {steps.map((item) => {
        return (
          <>
            <div className={css[item.classTitle]}>
              <StepDisplay
                image={item.image}
                head={item.head}
                text={item.text}
              />
            </div>
          </>
        );
      })}
      <div className={css.arrowOne}>
        <img className={css.img} src={arrow} />
      </div>
      <div className={css.arrowTwo}>
        <img className={css.img} src={arrow} />
      </div>
      <div className={css.arrowThree}>
        <img className={css.img} src={arrow} />
      </div>
    </div>
  );
}
