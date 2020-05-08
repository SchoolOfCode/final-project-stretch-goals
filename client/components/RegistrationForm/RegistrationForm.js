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
        <form
          style={{
            display: "grid",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <div className={css.formContainer}>
            <div className={css.title}>
              <h1>Profile Details</h1>
            </div>
            <p className={css.aboutTitle}> About me</p>
            <div className={css.firstName}>
              <InputField
                name="firstName"
                type="text"
                label="First Name"
                onChange={onChange}
              />
            </div>
            <div className={css.lastName}>
              <InputField
                name="lastName"
                type="text"
                label="Last Name"
                onChange={onChange}
              />
            </div>
            <div className={css.location}>
              <InputField
                name="tutorLocation"
                type="text"
                label="Location"
                onChange={onChange}
              />
            </div>
            <p className={css.mediaTitle}> Profile Media</p>
            <div className={css.subjects}>
              <InputField
                name="subjects"
                type="text"
                label="Subjects"
                onChange={onChange}
              />
            </div>
            <div className={css.image}>
              <InputField
                name="img_url"
                type="text"
                label="Profile Image URL"
                onChange={onChange}
              />
            </div>
            <div className={css.video}>
              <InputField
                name="vid_url"
                type="text"
                label="Profile Video URL"
                onChange={onChange}
              />
            </div>
            <div className={css.bio}>
              <textarea
                name="biography"
                onChange={onChange}
                style={{ height: "100px", width: "450px", marginTop: "15px" }}
                placeholder="Please write a short bio here, highlighting your specialist subjects and your approach to tutoring"
              ></textarea>
            </div>
            <p className={css.tutorTitle}>Tutoring Details</p>
            <div className={css.price}>
              <InputField
                onChange={onChange}
                name="price"
                type="text"
                label="Price per hour"
              />
            </div>
            <div className={css.education}>
              <InputField
                onChange={onChange}
                name="teachingLevel"
                type="text"
                label="Level of tutoring"
              />
            </div>
            <div className={css.experience}>
              <InputField
                name="experience"
                type="text"
                label="Experience"
                onChange={onChange}
              />
            </div>
            <Link href="/tutorDashPage">
              <div className={css.submit}>
                <Button handleClick={handleSubmit} text="Submit" />
              </div>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
