import React, { useState } from "react";
import TutorProfileSettingsForm from "./TutorProfileSettingsForm/index";
import TutorAccountSettingsForm from "./TutorAccountSettingsForm";
import css from "./TutorSettings.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  tel: null,
  email: "",
  accNum: null,
  sortCode: null,
  textContact: false,
  emailContact: false
};

export default function TutorSettings() {
  const [tutorSettings, setTutorSettings] = useState(initialState);
  const [toggleDisplay, setToggleDisplay] = useState(false);

  function handleChange(e) {
    const newState = e.target.value;
    const name = e.target.name;
    setTutorSettings({ ...tutorSettings, [name]: newState });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(tutorSettings);
  }

  function handlePageChange(e) {
    e.preventDefault();
    setToggleDisplay(!toggleDisplay);
  }
  return (
    <form className={css.form}>
      {!toggleDisplay ? (
        <>
          <TutorAccountSettingsForm
            tutorSettings={tutorSettings}
            handleChange={handleChange}
          />
          <button onClick={handleSubmit}>Save Changes</button>
          <button onClick={handlePageChange}>Profile Settings</button>
        </>
      ) : (
        <>
          <TutorProfileSettingsForm
            tutorSettings={tutorSettings}
            handleChange={handleChange}
          />
          <button onClick={handlePageChange}>Back</button>
          <button onClick={handleSubmit}>Submit Changes</button>
        </>
      )}
    </form>
  );
}
