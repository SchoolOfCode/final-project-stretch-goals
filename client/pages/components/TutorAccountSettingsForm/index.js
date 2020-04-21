import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  tel: null,
  email: "",
  textContact: false,
  emailContact: false
};

export default function TutorAccountSettingsForm() {
  const [tutorSettings, setTutorSettings] = useState(initialState);
  return (
    <>
      <h2>Account Settings:</h2>
      <p>Page 1</p>
      <form>
        <div>
          {" "}
          Your details:
          <br />
          <label for="first">
            First Name:
            <input name="first" type="text"></input>
          </label>
          <label for="last">
            Last Name:
            <input name="last" type="text"></input>
          </label>
          <label for="phone">
            Telephone number:
            <input name="phone" type="text"></input>
          </label>
          <label for="email">
            email:
            <input name="email" type="text"></input>
          </label>
        </div>
        <div>
          Payment Details:
          <br />
          <label for="accNum">
            Account Number:
            <input name="accNum" type="text"></input>
          </label>
          <label for="sortCode">
            Sort-Code:
            <input name="sortCode" type="text"></input>
          </label>
        </div>
        <div>
          <p>Preffered methods of contact:</p>
          <label>
            Text
            <input type="checkbox"></input>
          </label>
          <label>
            Email
            <input type="checkbox"></input>
          </label>
        </div>
        <button>Profile Settings ></button>
      </form>
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
// - subjects (text) - drop down menu OR input field
// - videoURL (text) - may try and install "upload image" feature
// - imgURL(text) - may try and install "upload vid" feature
// - bio (text) - input field large text box
// - level (text) - input field OR drop down menu
// - price (int) - slider or dropdown menu
// - location (text) - input field text with auto complete
// - experience (int) - slider or input field

// STATE:
// Initial state will contain all state for each input.
