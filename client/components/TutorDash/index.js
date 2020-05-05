import css from "./TutorDash.module.css";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import TutorNav from "./TutorNav/TutorNav";
import LessonManager from "./LessonManager";
import TutorAccountSettingsForm from "../TutorSettings/TutorAccountSettingsForm";
import TutorProfileSettingsForm from "../TutorSettings/TutorProfileSettingsForm";
import Calendar from "./Calendar";
import TeachingResources from "./TeachingResources/index";

export default function TutorDash() {
  const [contentShown, setContentShown] = useState(1);
  return (
    <>
      <NavBar />
      <div className={css.mainContainer}>
        <div className={css.navContainer}>
          <TutorNav setContentShown={setContentShown} />
        </div>
        <div className={css.contentContainer}>
          {contentShown == 1 && <LessonManager />}
          {contentShown == 2 && <TutorAccountSettingsForm />}
          {contentShown == 3 && <TutorProfileSettingsForm />}
          {contentShown == 4 && <Calendar />}
          {contentShown == 5 && <TeachingResources />}
        </div>
      </div>
    </>
  );
}
