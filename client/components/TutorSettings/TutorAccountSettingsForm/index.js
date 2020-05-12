import css from "./TutorAcountSettingsForm.module.css";
import InputField from "../../InputField/InputField";
//import { Input, Checkbox } from "@material-ui/core";
import { useState } from "react";
import Button from "../../Button/Button";
import CheckboxSelector from "../../Checkbox/Checkbox";

// refactor using a map over the stuff.

const keys = Object.keys({
  "First Name": "",
  "Last Name": "",
  Tel: null,
  Email: "",
  "Account Number": null,
  "Sort Code": null,
  textContact: false,
  emailContact: false
});

const newKeys = keys.slice(0, 6);

export default function TutorAccountSettingsForm() {
  function onChange(e) {
    e.persist();
    const newState = e.target.value;
    const name = e.target.name;
    //setTutorSetting has an argument which is a function or anything else, containing old state
    setAccountData(oldState => ({ ...oldState, [name]: newState }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(accountData);
    // updateAccount();
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

  // Send a PUT request to update the backend, so we can populate table input fields with existing data
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

  return (
    <>
      <div className={css.accountForm}>
        <h3 className={css.title}>Change your account settings here</h3>
        <form>
          {newKeys.map(item => {
            return (
              <InputField
                label={item}
                onChange={onChange}
                type="text"
                name={item}
              />
            );
          })}
          <div>
            <h3 className={css.contact}>Preferred method of contact:</h3>
            <CheckboxSelector label="Email" />
            <CheckboxSelector label="Phone" />
          </div>
          <Button text="Submit" handleClick={handleSubmit} />
        </form>
      </div>
    </>
  );
}

// PLAN FOR TUTOR ACOUNT SETTINGS:

// COMPONENTS:

// PAGE 1
// A form to update/store important information such as:
//  - First and Last name
//  - Payment details (INT)
//  - Phone number (INT)
//  - email (TEXT)

// PAGE 2
// 2nd half of the form will contain profile settings and will include all of the other keys in our DB table:
//  subjects (text) - drop down menu OR input field
//  videoURL (text) - may try and install "upload image" feature
//  imgURL(text) - may try and install "upload vid" feature
//  bio (text) - input field large text box
//  level (text) - input field OR drop down menu
//  price (int) - slider or dropdown menu
// - location (text) - input field text with auto complete
// - experience (int) - slider or input field

// STATE:
// Initial state will contain all state for each input.
