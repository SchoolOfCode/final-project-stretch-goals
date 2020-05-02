import css from "./Filters.module.css";
import SliderComponent from "./Slider/Slider";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";

export default function Filters({
  subject,
  setSubject,
  setPriceMin,
  priceMax,
  setPriceMax,
  priceMin,
  experience,
  setExperience,
  handleSubmit
}) {
  function handleChange(e) {
    setSubject(e.target.value);
    console.log(subject, "yoyoyoyoyo");
  }

  return (
    <>
      <h3 className={css.subjectTitle}>Subject</h3>
      <InputField
        value={subject}
        onChange={handleChange}
        label="Enter Subject to Begin Search"
      />
      {/* <input
        className={css.subjectValue}
        placeholder="Start typing a subject to begin"
        value={subject}
        onChange={handleChange}
      /> */}
      <h3 className={css.priceDisplay}>
        £{priceMin} - £{priceMax}
      </h3>
      <h3 className={css.priceTitle}>Price </h3>
      <div className={css.priceValue}>
        <SliderComponent
          values={[priceMin, priceMax]}
          onChange={function(e, val) {
            setPriceMin(val[0]);
            setPriceMax(val[1]);
          }}
        />
      </div>
      <h3 className={css.experienceTitle}> Experience </h3>
      <h3 className={css.experienceDisplay}>{experience}years</h3>
      <div className={css.experienceValue}>
        <SliderComponent
          values={experience}
          onChange={(e, val) => {
            setExperience(val);
          }}
        />
      </div>
      <div className={css.filtersButton}>
        <Button handleClick={handleSubmit} text="Apply Filters" width="120px" />
      </div>
    </>
  );
}
