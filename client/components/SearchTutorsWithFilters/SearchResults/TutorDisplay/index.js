import css from "./TutorDisplay.module.css";
import StarRating from "../../../StarRating/StarRating";
export default function TutorDisplay({ item }) {
  return (
    <>
      <h3 className={`${css.tutorTitle} ${css.itemAlign}`}>
        {item.firstName} {item.lastName}
      </h3>
      <img
        className={`${css.tutorImage} ${css.itemAlign}`}
        src={item.imageURL}
      />
      <div className={`${css.tutorRating} ${css.itemAlign}`}>
        <StarRating size="large" defaultValue={4.5} />
      </div>
    </>
  );
}
