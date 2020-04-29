import css from "./SearchTutors.module.css";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import CustomizedInputBase from "../MainSearchInput";

export default function SearchTutors({
  setSearchBoolean,
  searchBoolean,
  subject,
  setSubject,
  setSearchResultsData,
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
    console.log("keydown");
    if (e.key === "Enter") {
      console.log("enter");
      handleSubmit();
      setSearchBoolean(!searchBoolean);
    }
  }

  function handleChange(e) {
    console.log(e.target.value);
    setSubject(e.target.value);
  }

  function handleClick() {
    console.log("click");
    handleSubmit();
  }

  return (
    <div className={css.mainContainer}>
      <h1 className={css.searchTitle}>Search for a Tutor Here</h1>
      <div className={css.inputContainer}>
        <CustomizedInputBase
          handleClick={handleClick}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
        />
        {/* <InputField
          label="Enter Subject"
          type="text"
          className="searchInput"
          onChange={handleChange}
          onKeyPress={handleKeyDown}
          width="60ch"
        /> */}
        {/* <Button text="Search" handleClick={handleSubmit} /> */}
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
