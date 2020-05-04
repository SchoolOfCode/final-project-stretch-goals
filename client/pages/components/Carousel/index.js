import React from "react";
import css from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRating from "../StarRating/StarRating";

//import Hodor from "../Testimonial/images/Hodor.png";

//import { css } from "@material-ui/system";
// import Patrick from "../images/Patrick.jpg";
// import Mark from "../images/mark.jpg";

const tests = [
  {
    name: "Hodor",
    url:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/26/14/hodor-is-teaming-up-with-the-white-walkers-check-out-this-insane-fan-theory-hodor-hodori-668266.jpg?w968h681",
    text: `"Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor!
    Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor -
    hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor
    hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor...
    Hodor hodor hodor..."`
  },
  {
    name: "Hodor2",
    url:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/26/14/hodor-is-teaming-up-with-the-white-walkers-check-out-this-insane-fan-theory-hodor-hodori-668266.jpg?w968h681",
    text: `"Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor!
    Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor -
    hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor
    hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor...
    Hodor hodor hodor..."`
  },
  {
    name: "Hodor3",
    src:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/26/14/hodor-is-teaming-up-with-the-white-walkers-check-out-this-insane-fan-theory-hodor-hodori-668266.jpg?w968h681",
    text: `"Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor!
    Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor -
    hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor
    hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor...
    Hodor hodor hodor..."`
  }
];

const settings = {
  dots: true,
  fade: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

export default function Carousel() {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.header}>Testimonials</h1>
      <Slider {...settings}>
        {tests.map(item => {
          return (
            <>
              <img
                src={item.url}
                alt="user image"
                style={{ height: "250px", width: "250px" }}
              />
              <div className={css.name}>{item.name}</div>

              <div className={css.stars}>
                <StarRating />
              </div>
              <div className={css.text}>{item.text}</div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
