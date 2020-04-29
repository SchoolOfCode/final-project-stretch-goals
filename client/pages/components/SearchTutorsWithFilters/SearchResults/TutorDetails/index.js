import css from "./TutorDetails.module.css";
import Button from "../../../Button/Button";
export default function TutorDetails({ item }) {
  return (
    <>
      <h3 className={css.title}>Details</h3>
      <div className={css.detailsContainer}>
        <p>Location: {item.location}</p>
        <p>Subject: {item.subjects}</p>
        <p>Level: {item.level}</p>
        <p>Experience: {item.experience}</p>
      </div>
      <div className={css.book}>
        <p className={css.price}>Price: £{item.price}p/h</p>
        <Button text="Book Now" className={css.bookButton} />
      </div>
    </>
  );
}
