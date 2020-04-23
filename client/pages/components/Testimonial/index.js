import css from "../Testimonial/Testimonial.module.css";

export default function Testimonials() {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.header}>Testimonials</h1>
      <div className={css.imageContainer}>
        <div className={css.imageCircle}></div>
      </div>
      <div className={css.stars}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={css.text}>
        "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor!
        Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor -
        hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor
        hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor...
        Hodor hodor hodor..."
      </div>
    </div>
  );
}
