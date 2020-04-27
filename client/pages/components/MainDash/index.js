import React from "react";
import Link from "next/link";
import css from "./MainDash.module.css";

export default function MainDash() {
  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.header}>
          <h1>Tutors</h1>
        </div>
        <div className={css.links}>
          <Link href="/tutorsettings">
            <h3>Account Settings</h3>
          </Link>
          <h3>View Calendar</h3>
          <h3>Manage Bookings</h3>
        </div>
      </div>
    </>
  );
}
