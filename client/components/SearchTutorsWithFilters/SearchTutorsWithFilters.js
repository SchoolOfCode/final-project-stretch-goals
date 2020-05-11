import css from "./SearchTutorsWithFilters.module.css";
import Filters from "./Filters/Filters";
import SearchResults from "./SearchResults/SearchResults";
import { useState } from "react";
import { url } from "../../config";

export default function SearchTutorsWithFilters({
  searchResultsData,
  subject,
  setSubject,
  setSearchResultsData,
}) {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(25);
  const [experience, setExperience] = useState(0);
  async function handleSubmit() {
    console.log(`${priceMin}/${priceMax}/${experience}/${subject}`);
    const res = await fetch(
      `${url}/dev/tutors/masterSearch/${priceMin}/${priceMax}/${experience}/${subject}`
    );
    const data = await res.json();
    console.log(data);
    setSearchResultsData(data);
  }

  return (
    <>
      <div className={css.mainContainer}>
        <h1 className={css.resultsTitle}>{searchResultsData.length} Results</h1>
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
