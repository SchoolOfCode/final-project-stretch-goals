import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Link from "next/link";
import MainDash from "./components/MainDash";

export default function TutorDashboard() {
  return (
    <>
      <Navbar />
      <MainDash />
    </>
  );
}
