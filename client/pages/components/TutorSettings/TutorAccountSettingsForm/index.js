export default function TutorAccountSettingsForm({
  handleChange,
  tutorSettings
}) {
  return (
    <>
      <h2>Account Settings:</h2>
      <p>Page 1</p>
      <div>
        {" "}
        Your details:
        <br />
        <label>
          First Name:
          <input onChange={handleChange} name="firstName" type="text"></input>
        </label>
        <label>
          Last Name:
          <input onChange={handleChange} name="lastName" type="text"></input>
        </label>
        <label>
          Telephone number:
          <input onChange={handleChange} name="tel" type="text"></input>
        </label>
        <label>
          email:
          <input onChange={handleChange} name="email" type="text"></input>
        </label>
      </div>
      <div>
        Payment Details:
        <br />
        <label>
          Account Number:
          <input onChange={handleChange} name="accNum" type="text"></input>
        </label>
        <label>
          Sort-Code:
          <input onChange={handleChange} name="sortCode" type="text"></input>
        </label>
      </div>
      <div>
        <p>Preffered methods of contact:</p>
        <label>
          Text
          <input
            onChange={handleChange}
            name="textContact"
            type="checkbox"
          ></input>
        </label>
        <label>
          Email
          <input
            onChange={handleChange}
            name="emailContact"
            type="checkbox"
          ></input>
        </label>
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
