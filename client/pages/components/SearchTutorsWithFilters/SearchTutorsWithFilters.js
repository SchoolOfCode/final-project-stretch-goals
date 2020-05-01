import css from "./SearchTutorsWithFilters.module.css";
import Filters from "./Filters/Filters";
import SearchResults from "./SearchResults/SearchResults";
import { useState } from "react";

export default function SearchTutorsWithFilters({
  searchResultsData,
  subject,
  setSubject,
  setSearchResultsData
}) {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(8);
  const [experience, setExperience] = useState(0);
  async function handleSubmit() {
    console.log(`${priceMin}/${priceMax}/${experience}/${subject}`);
    const res = await fetch(
      `https://ugujwwfn00.execute-api.eu-west-1.amazonaws.com/dev/tutors/masterSearch/${priceMin}/${priceMax}/${experience}/${subject}`
    );
    const data = await res.json();
    console.log(data);
    setSearchResultsData(data);

    setSubject("");
  }

  return (
    <>
      <div className={css.mainContainer}>
        <h1 style={{ color: "var(--font-color-5)" }}>Results</h1>
        <SearchResults searchResultsData={searchResultsData} />
      </div>
      <div className={css.filterContainer}>
        <h1 className={css.filterTitle}>Filters</h1>
        <Filters
          setExperience={setExperience}
          experience={experience}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          subject={subject}
          setSubject={setSubject}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
