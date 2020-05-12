import css from "./SearchTutors.module.css";
import { url } from "../../config";

import CustomizedInputBase from "../MainSearchInput";

export default function SearchTutors({
  setSearchBoolean,
  searchBoolean,
  subject,
  setSubject,
  setSearchResultsData,
}) {
  async function handleSubmit() {
    const res = await fetch(`${url}/dev/tutors/search/${subject}`);
    const data = await res.json();
    console.log(data);
    setSearchResultsData(data);
    setSearchBoolean(!searchBoolean);
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
    <div className={css.background}>
      <div className={css.mainContainer}>
        <h1 className={css.searchTitle}>Find Your Tutor Today</h1>
        <div className={css.inputContainer}>
          <CustomizedInputBase
            handleClick={handleClick}
            handleKeyDown={handleKeyDown}
            handleChange={handleChange}
          />
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
    </div>
  );
}
