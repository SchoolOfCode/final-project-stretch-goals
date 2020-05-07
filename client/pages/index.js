import Navbar from "../components/NavBar/NavBar";
import MissionStatement from "../components/MissionStatement";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial/index";

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
