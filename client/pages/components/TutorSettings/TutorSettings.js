import React, { useState } from "react";
import TutorProfileSettingsForm from "./TutorProfileSettingsForm/index";
import TutorAccountSettingsForm from "./TutorAccountSettingsForm";
import css from "./TutorSettings.module.css";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  tel: null,
  email: "",
  accNum: null,
  sortCode: null,
  textContact: false,
  emailContact: false,
  subjects: [""],
  bio: "",
  teachingLevel: "",
  location: "",
  img_url: "",
  vid_url: "",
  price: null,
  exp: ""
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
    updateAccount();
  }

  function handlePageChange(e) {
    e.preventDefault();
    setToggleDisplay(!toggleDisplay);
  }

  async function updateAccount() {
    const fd = new FormData();
    fd.append("first_name", tutorSettings.firstName);
    JSON.stringify(fd);
    axios
      .post(
        "https://e9farpt6x0.execute-api.eu-west-1.amazonaws.com/dev/tutors",
        fd
      )
      .then(res => {
        console.log(res);
      });
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
