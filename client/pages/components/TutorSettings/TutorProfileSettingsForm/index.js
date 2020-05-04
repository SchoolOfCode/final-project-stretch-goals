import InputField from "../../InputField/InputField";
import css from "./TutorProfileSettingsForm.module.css";

export default function TutorProfileSettingsForm({
  handleChange,
  formData,
  onChange
}) {
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
  const newKeys = keys.slice(8, 14);

  return (
    <>
      <div className={css.accountForm}>
        <h2 className={css.title}>Profile Settings</h2>
        {newKeys.map(item => {
          return (
            <InputField
              label={item}
              onChange={handleChange}
              type="text"
              name={item}
            />
          );
        })}
        <p>upload image</p>
        <input name="img_url" type="file" onChange={handleChange}></input>
        <p>upload video url</p>
        <input name="img_url" type="file" onChange={handleChange}></input>
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
