import css from "./TutorAcountSettingsForm.module.css";
import InputField from "../../InputField/InputField";
import { Input } from "@material-ui/core";

// refactor using a map over the stuff.

export default function TutorAccountSettingsForm({ onChange, formData }) {
  const keys = Object.keys(formData);
  const newKeys = keys.slice(1, 6);

  return (
    <>
      <h3>Account Settings</h3>
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
      <h3 className={css.contact}>Preffered methods of contact:</h3>
      <label>
        Text
        <input onChange={onChange} name="textContact" type="checkbox"></input>
      </label>
      <label>
        Email
        <input onChange={onChange} name="emailContact" type="checkbox"></input>
      </label>
    </>
  );
}

// OG INPUTS
{
  /* <label>
            First Name:
            <input
              className={css.first}
              onChange={handleChange}
              name="firstName"
              type="text"
            ></input>
          </label> 

<label>
Last Name:
<input
  className={css.last}
  onChange={handleChange}
  name="lastName"
  type="text"
></input>
</label>
<label>
Telephone number:
<input
  className={css.phone}
  onChange={handleChange}
  name="tel"
  type="text"
></input>
</label>
<label>
email:
<input
  className={css.accountForm}
  onChange={handleChange}
  name="email"
  type="text"
></input>
</label>


<label>
            Account Number:
            <input
              className={css.acc}
              onChange={handleChange}
              name="accNum"
              type="text"
            ></input>
          </label>
          <label>
            Sort-Code:
            <input
              className={css.sortcode}
              onChange={handleChange}
              name="sortCode"
              type="text"
            ></input>
          </label>

*/
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
