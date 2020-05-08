import css from "./RegistrationForm.module.css";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { useState, useEffect } from "react";
import Link from "next/link";
import { url } from "../../config";
import { useAuth } from "../../auth";
import MultilineTextFields from "./MultiInputField/MultiInput";

const initialState = {
  firstName: "Mark",
  lastName: "Young",
  subjects: "Science",
  imageURL:
    "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
  videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  biography: "it's nice to be nice",
  price: 15,
  teachingLevel: "University",
  tutorLocation: "Lichfield",
  experience: 10,
  rating: 0,
  student: false,
};

export default function RegistrationForm() {
  const [confirmation, setConfirmation] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const [sub, setSub] = useState(false);

  const auth = useAuth();

  useEffect(() => {
    setSub(auth ? auth.idTokenData.sub : null);
  }, [auth]);

  function onChange(e) {
    e.persist();
    const newState = e.target.value;
    const name = e.target.name;
    setFormData((oldState) => ({ ...oldState, [name]: newState }));
    console.log(formData.biography);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch(
      `https://gcubq6orwa.execute-api.eu-west-1.amazonaws.com/dev/tutors/${sub}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );
    console.log(sub);
    setConfirmation(!confirmation);
  }

  return (
    <>
      <div className={css.container}>
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
                name="imageURL"
                type="text"
                label="Profile Image URL"
                onChange={onChange}
              />
            </div>
            <div className={css.video}>
              <InputField
                name="videoURL"
                type="text"
                label="Profile Video URL"
                onChange={onChange}
              />
            </div>
            <div className={css.bio}>
              <MultilineTextFields onChange={onChange} name="biography" />
              {/* <textarea
                name="biography"
                onChange={onChange}
                style={{ height: "100px", width: "450px", marginTop: "15px" }}
                placeholder="Please write a short bio here, highlighting your specialist subjects and your approach to tutoring"
              ></textarea> */}
            </div>
            <p className={css.tutorTitle}>Tutoring Details</p>
            <div className={css.price}>
              <InputField
                onChange={onChange}
                name="price"
                type="number"
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
                type="number"
                label="Experience"
                onChange={onChange}
              />
            </div>
            <Link href="/tutorDashPage">
              <div className={css.submit}>
                <Button handleClick={handleSubmit} text="Submit" />
              </div>
            </Link>
            {confirmation && (
              <div className={css.confirm}>
                <p>Profile settings updated!</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
