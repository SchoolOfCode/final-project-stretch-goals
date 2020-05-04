import InputField from "../../InputField/InputField";
import css from "./TutorProfileSettingsForm.module.css";
import { useState } from "react";
import Button from "../../Button/Button";

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

const initialState = {
  subjects: [""],
  bio: "",
  teachingLevel: "",
  location: "",
  price: null,
  exp: "",
  img_url: "",
  vid_url: ""
};

const newKeys = keys.slice(8, 14);

export default function TutorProfileSettingsForm() {
  const [formData, setFormData] = useState(initialState);

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

  return (
    <>
      <div className={css.accountForm}>
        <h2 className={css.title}>Profile Settings</h2>
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
          <p>upload image</p>
          <input name="img_url" type="file" onChange={onChange}></input>
          <p>upload video url</p>
          <input name="vid_url" type="file" onChange={onChange}></input>
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
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
