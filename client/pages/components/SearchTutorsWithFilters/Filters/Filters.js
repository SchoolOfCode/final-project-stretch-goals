import css from "./Filters.module.css";
import PriceSlider from "./PriceSlider/PriceSlider";
import ExperienceSlider from "./ExperienceSlider/ExperienceSlider";
import { useState } from "react";

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
      <h3 className={css.subjectTitle}>Subjects</h3>
      <h3 className={css.priceDisplay}>
        £{priceMin} - £{priceMax}
      </h3>
      <input
        className={css.subjectValue}
        placeholder="Start typing a subject to begin"
        value={subject}
        onChange={handleChange}
      />
      <h3 className={css.priceTitle}> Price </h3>
      <div className={css.priceValue}>
        <PriceSlider
          priceMin={priceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          setPriceMin={setPriceMin}
        />
      </div>
      <h3 className={css.experienceTitle}> Experience </h3>
      <h3 className={css.experienceDisplay}>{experience}years</h3>
      <div className={css.experienceValue}>
        <ExperienceSlider
          experience={experience}
          setExperience={setExperience}
        />
      </div>
    </>
  );
}
