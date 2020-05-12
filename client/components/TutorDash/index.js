import css from "./TutorDash.module.css";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import TutorNav from "./TutorNav/TutorNav";
import LessonManager from "./LessonManager";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import CalendarDisplay from "./CalendarDisplay";
import TeachingResources from "./TeachingResources/index";

export default function TutorDash() {
  const [contentShown, setContentShown] = useState(1);
  return (
    <>
      <NavBar />
      <div className={css.mainContainer}>
        <div className={css.navContainer}>
          <TutorNav
            setContentShown={setContentShown}
            contentShown={contentShown}
          />
        </div>
        <div className={css.contentContainer}>
          {contentShown == 1 && <LessonManager />}
          {contentShown == 2 && <RegistrationForm />}
          {contentShown == 3 && <CalendarDisplay />}
          {contentShown == 4 && <TeachingResources />}
        </div>
      </div>
    </>
  );
}
