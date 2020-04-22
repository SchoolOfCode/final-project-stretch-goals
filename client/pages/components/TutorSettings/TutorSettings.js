import React, { useState } from "react";
import TutorProfileSettingsForm from "./TutorProfileSettingsForm/index";
import TutorAccountSettingsForm from "./TutorAccountSettingsForm";
import css from "./TutorSettings.module.css";
import axios from "axios";
import Button from "../Button/Button";

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
    const res = await fetch(
      "https://e9farpt6x0.execute-api.eu-west-1.amazonaws.com/dev/tutors",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          tutorSettings
        })
      }
    );
    // const data = await res.json()
    // success - set up what we get back.
  }

  return (
    <div className={css.form}>
      <form>
        {!toggleDisplay ? (
          <>
            <TutorAccountSettingsForm
              tutorSettings={tutorSettings}
              handleChange={handleChange}
            />
            <Button text="Save" handleClick={handleSubmit}></Button>
            <Button text="Next" handleClick={handlePageChange}></Button>
          </>
        ) : (
          <>
            <TutorProfileSettingsForm
              tutorSettings={tutorSettings}
              handleChange={handleChange}
            />
            <Button text="Back" handleClick={handlePageChange}></Button>
            <Button text="Save" handleClick={handleSubmit}></Button>
          </>
        )}
      </form>
    </div>
  );
}
