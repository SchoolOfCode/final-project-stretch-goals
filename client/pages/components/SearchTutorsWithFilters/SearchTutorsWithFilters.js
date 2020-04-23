import css from "./SearchTutorsWithFilters.module.css";
import Filters from "./Filters/Filters";
import SearchResults from "./SearchResults/SearchResults";

export default function SearchTutorsWithFilters({
  searchResultsData,
  subject,
  setSubject
}) {
  return (
    <>
      <div className={css.mainContainer}>
        <h1 style={{ color: "var(--font-color-2)" }}>Results</h1>
        <SearchResults searchResultsData={searchResultsData} />
      </div>
      <div className={css.filterContainer}>
        <h1 className={css.filterTitle}>Filters</h1>
        <Filters subject={subject} setSubject={setSubject} />
      </div>
    </>
  );
}
