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
    //setTutotSetting has an argument which is a function or anything else, containing old state
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

  // Function will run on page render so that we can populate our input fields with the data from our fetch request.
  // need params to get correct users data.
  // useEffect(() => {
  //   async function getAccountDetails() {
  //     const res = await fetch(
  //       `https://e9farpt6x0.execute-api.eu-west-1.amazonaws.com/dev/tutors/${id}`
  //     );
  //     const data = await res.json();
  //     setFormData(data);
  //   }
  // }, []);

  // Send a PUT request to update the backend
  // async function updateAccount() {
  //   const res = await fetch(
  //     "https://e9farpt6x0.execute-api.eu-west-1.amazonaws.com/dev/tutors",
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         ...formData
  //       })
  //     }
  //   );
  //   const data = await res.json();
    // success - set up what we get back.
    // think about navigation after they have finished.
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
