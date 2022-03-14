import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React from "react";
import styled from "styled-components";
import ShabowImage from "../assets/background image/stand.png";
import image1 from "../assets/book image/book-1.png";
import image2 from "../assets/book image/book-2.png";
import image3 from "../assets/book image/book-3.png";
import image4 from "../assets/book image/book-4.png";
import image5 from "../assets/book image/book-5.png";
import image6 from "../assets/book image/book-6.png";
import image7 from "../assets/book image/book-7.png";
const BookSlider = () => {
  return (
    <SliderWrapper>
      <Splide
        options={{
          perPage: 3,
          type: "loop",
          perMove: 1,
          autoplay: true,
          arrows: false,
          pagination: false,
        }}
      >
        <SplideSlide data-splide-interval="1000">
          <img src={image1} alt="" />
        </SplideSlide>

        <SplideSlide data-splide-interval="1000">
          <img src={image2} alt="" />
        </SplideSlide>
        <SplideSlide data-splide-interval="1000">
          <img src={image2} alt="" />
        </SplideSlide>
        <SplideSlide data-splide-interval="1000">
          <img src={image4} alt="" />
        </SplideSlide>
        <SplideSlide data-splide-interval="1000">
          <div>
            <img src={image5} alt="" />
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="1000">
          <img src={image3} alt="" />
        </SplideSlide>
        <SplideSlide data-splide-interval="1000">
          <div>
            <img src={image6} alt="" />
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="1000">
          <div>
            <img src={image7} alt="" />
          </div>
        </SplideSlide>
      </Splide>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  width: 400px;
  /* position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 100%;
    background-image: url(${ShabowImage});
    left: -50px;
    bottom: -150px;
  } */

  img {
    width: 130px;
  }
`;

export default BookSlider;
