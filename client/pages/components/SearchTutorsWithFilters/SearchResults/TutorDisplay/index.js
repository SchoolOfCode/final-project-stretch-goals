import css from "./TutorDisplay.module.css";
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
      <p className={`${css.tutorRating} ${css.itemAlign}`}>
        Rating: {item.rating}
      </p>
    </>
  );
}
