import React, { useState, useEffect } from "react";
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
  price: null,
  exp: "",
  img_url: "",
  vid_url: ""
};

export default function TutorSettings() {
  const [formData, setFormData] = useState(initialState);
  const [toggleDisplay, setToggleDisplay] = useState(false);

  function onChange(e) {
    e.persist();
    const newState = e.target.value;
    const name = e.target.name;
    //setTutorSetting has an argument which is a function or anything else, containing old state
    setFormData(oldState => ({ ...oldState, [name]: newState }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    updateAccount();
  }

  function handlePageChange(e) {
    e.preventDefault();
    setToggleDisplay(!toggleDisplay);
  }
  }

  return (
    <div className={css.form}>
      <form style={{ marginTop: "20vh" }}>
        {!toggleDisplay ? (
          <>
            <TutorAccountSettingsForm
              tutorSettings={formData}
              onChange={onChange}
              formData={formData}
            />
            <Button text="Save" handleClick={handleSubmit}></Button>
            <Button text="Next" handleClick={handlePageChange}></Button>
          </>
        ) : (
          <>
            <div className={css.page1}>
              <TutorProfileSettingsForm
                tutorSettings={formData}
                onChange={onChange}
                formData={formData}
              />
              <Button text="Back" handleClick={handlePageChange}></Button>
              <Button text="Save" handleClick={handleSubmit}></Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
