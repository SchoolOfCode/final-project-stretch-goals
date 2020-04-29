import css from "./Filters.module.css";
import SliderComponent from "./Slider/Slider";
import Button from "../../Button/Button";
import { useState } from "react";
import InputField from "../../InputField/InputField";

export default function Filters({ subject, setSubject }) {
  const [priceMin, setPriceMin] = useState(10);
  const [priceMax, setPriceMax] = useState(40);
  const [experience, setExperience] = useState(5);

  function handleChange(e) {
    setSubject(e.target.value);
    console.log(subject);
  }

  return (
    <>
      <h3 className={css.subjectTitle}>Subject</h3>
      <InputField
        value={subject}
        handleChange={handleChange}
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
      <h3 className={css.priceTitle}> Price </h3>
      <div className={css.priceValue}>
        <SliderComponent
          values={[priceMin, priceMax]}
          onChange={function (e, val) {
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
        <Button text="Apply Filters" />
      </div>
    </>
  );
}
