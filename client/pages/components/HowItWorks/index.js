import css from "./HowItWorks.module.css";
import StepDisplay from "./StepDisplay/index";

export default function HowItWorks() {
  const steps = [
    {
      classTitle: "one",
      image: "image",
      text:
        "step 4 text text text step 4 text text text step 4 text text text step 4 text text text"
    },
    {
      classTitle: "two",
      image: "image",
      text:
        "step 4 text text text step 4 text text text step 4 text text text step 4 text text text"
    },
    {
      classTitle: "three",
      image: "image",
      text:
        "step 4 text text text step 4 text text text step 4 text text text step 4 text text text"
    },
    {
      classTitle: "four",
      image: "image",
      text:
        "step 4 text text text step 4 text text text step 4 text text text step 4 text text text "
    }
  ];

  return (
    <div className={css.mainContainer}>
      <h1 className={css.how}>How it works</h1>
      {steps.map(item => {
        return (
          <div className={css[item.classTitle]}>
            <StepDisplay image={item.image} text={item.text} />
          </div>
        );
      })}
    </div>
  );
}
