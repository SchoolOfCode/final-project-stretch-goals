import css from "./TutorAcountSettingsForm.module.css";
import InputField from "../../InputField/InputField";
import { Input, Checkbox } from "@material-ui/core";

// refactor using a map over the stuff.

export default function TutorAccountSettingsForm({ onChange, formData }) {
  const keys = Object.keys({
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
  });
  const newKeys = keys.slice(0, 6);

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
        <h3 className={css.title}>Account Settings</h3>

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
          <Checkbox label="Email" /> Email
          <Checkbox label="Phone" /> Phone
        </div>
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
