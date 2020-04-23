import css from "./SearchTutors.module.css";
import Button from "../Button/Button";
export default function SearchTutors({
  setSearchBoolean,
  searchBoolean,
  subject,
  setSubject,
  setSearchResultsData
}) {
  async function handleSubmit() {
    const res = await fetch(
      "https://wsibkd4d97.execute-api.eu-west-1.amazonaws.com/dev/tutors"
    );
    const data = await res.json();
    setSearchResultsData(data);
    console.log(data);
    setSearchBoolean(!searchBoolean);

    setSubject("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
      setSearchBoolean(!searchBoolean);
    }
  }

  function handleChange(e) {
    setSubject(e.target.value);
  }

  return (
    <div className={css.mainContainer}>
      <h1 className={css.searchTitle}>Search for a Tutor Here</h1>
      <div className={css.inputContainer}>
        <input
          onKeyPress={handleKeyDown}
          onChange={handleChange}
          value={subject}
          className={css.searchInput}
          placeholder="Start typing a subject to begin"
        />
        <Button text="  Search  " handleClick={handleSubmit} />
        {/* <button className={css.searchButton} onClick={handleSubmit}>
          SEARCH
        </button> */}
      </div>
      <span
        className={css.advancedSearch}
        onClick={() => {
          setSearchBoolean(!searchBoolean);
        }}
      >
        advanced search
      </span>
    </div>
  );
}
