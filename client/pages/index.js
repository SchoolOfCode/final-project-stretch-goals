import React from "react";
import Navbar from "../pages/components/NavBar/NavBar";
import MissionStatement from "./components/MissionStatement";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial/index";
//import TutorDash from "./components/TutorDash";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <MissionStatement />
      <HowItWorks />
      <Testimonial />
    </>
  );
}
