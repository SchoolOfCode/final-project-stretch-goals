import css from "./TutorAbout.module.css";
import { useState } from "react";
export default function TutorAbout({ item }) {
  const [videoClass, setVideoClass] = useState(
    `${css.videoTitle} ${css.selectedTitle}`
  );
  const [aboutClass, setAboutClass] = useState(css.aboutTitle);
  const [testClass, setTestClass] = useState(css.testTitle);
  const [showContent, setShowContent] = useState(1);

  function handleContentClick(e) {
    if (e.target.innerText === "Video Intro") {
      setShowContent(1);
      setVideoClass(`${css.videoTitle} ${css.selectedTitle}`);
      setAboutClass(css.aboutTitle);
      setTestClass(css.testTitle);
    } else if (e.target.innerText === "About Me") {
      setShowContent(2);
      setVideoClass(css.videoTitle);
      setAboutClass(`${css.aboutTitle} ${css.selectedTitle}`);
      setTestClass(css.testTitle);
    } else {
      setShowContent(3);
      setVideoClass(css.videoTitle);
      setAboutClass(css.aboutTitle);
      setTestClass(`${css.testTitle} ${css.selectedTitle}`);
    }
  }

  return (
    <>
      <div className={css.titleContainer}>
        <h3
          onClick={handleContentClick}
          className={`${videoClass} ${css.itemAlign}`}
        >
          Video Intro
        </h3>
        <h3
          onClick={handleContentClick}
          className={`${aboutClass} ${css.itemAlign}`}
        >
          About Me
        </h3>
        <h3
          onClick={handleContentClick}
          className={`${testClass} ${css.itemAlign}`}
        >
          Testimonials
        </h3>
      </div>
      <div className={css.aboutContent}>
        {showContent === 1 ? (
          <div className={css.videoContainer}>
            <iframe width="280" height="200" src={item.videoURL}></iframe>
          </div>
        ) : null}
        {showContent === 2 ? <p>{item.biography}</p> : null}
        {showContent === 3 ? <p>Testimonial's here</p> : null}
      </div>
    </>
  );
}
