import css from "./RegistrationForm.module.css";
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";
import InputField from "../InputField/InputField";
import { useState } from "react";
// import { css } from "@material-ui/system";
import Link from "next/link";
import { url } from "../../config";

const initialState = {
  firstName: "Mark",
  lastName: "Young",
  subjects: "Science",
  imageURL: "../../images/step1.png",
  videoURL: "12345",
  biography: "it's nice to be nice",
  price: 100,
  teachingLevel: "University",
  tutorLocation: "Lichfield",
  experience: 10,
  rating: 0,
  student: false,
};

const keys = Object.keys({
  "First Name": "",
  "Last Name": "",
  Tel: null,
  Email: "",
  "Account Number": null,
  "Sort Code": null,
  textContact: false,
  emailContact: false,
});

const newKeys = keys.slice(0, 6);

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialState);

  function onChange(e) {
    e.persist();
    const newState = e.target.value;
    const name = e.target.name;
    //setTutorSetting has an argument which is a function or anything else, containing old state
    setFormData((oldState) => ({ ...oldState, [name]: newState }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch(`${url}/dev/tutors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <>
      <div className={css.container}>
        <div className={css.navContainer}>
          <NavBar />
        </div>
        <div className={css.formContainer}>
          <form
            style={{
              display: "grid",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <h1>Please provide the following details to create your account</h1>
            <InputField
              name="firstName"
              type="text"
              label="First Name"
              onChange={onChange}
            />
            <InputField
              name="lastName"
              type="text"
              label="Last Name"
              onChange={onChange}
            />
            <InputField
              name="tutorLocation"
              type="text"
              label="Location"
              onChange={onChange}
            />
            <InputField
              name="subjects"
              type="text"
              label="Subjects"
              onChange={onChange}
            />
            {/* <p>upload image</p>
        <input name="img_url" type="file" onChange={onChange}></input>
        <p>upload video url</p>
        <input name="vid_url" type="file" onChange={onChange}></input> */}
            <textarea
              name="biography"
              onChange={onChange}
              style={{ height: "100px", width: "350px", marginTop: "15px" }}
              placeholder="Please write a short bio here, hilighting your specialist subjects and your approach to tutoring"
            ></textarea>
            <InputField
              onChange={onChange}
              name="price"
              type="text"
              label="Price per hour"
            />
            <InputField
              onChange={onChange}
              name="teachingLevel"
              type="text"
              label="Level of tutoring"
            />
            <InputField
              name="experience"
              type="text"
              label="Experience"
              onChange={onChange}
            />
            <Link href="/tutorDashPage">
              <div>
                <Button handleClick={handleSubmit} text="Submit" />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
