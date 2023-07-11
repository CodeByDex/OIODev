import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

const BenefitsSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.66,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-96 my-8 text-center">
      <div className="flex flex-col w-fit px-5">
        <h3 className="font-semibold text-xl text-brand-textHeader mb-3">
          Improved User Experience
        </h3>
        <p className="text-sm mt-3">
          We design websites that provide a seamless and intuitive user
          experience, making it easy for visitors to navigate and interact with
          your content.
        </p>
      </div>
      <div className="flex flex-col w-fit px-5">
        <h3 className="font-semibold text-xl text-brand-textHeader mb-3">
          Enhanced Brand Credibility
        </h3>
        <p className="text-sm mt-3">
          A professionally designed website reflects the credibility and
          professionalism of your brand, helping to establish trust with your
          audience.
        </p>
      </div>
      <div className="flex flex-col w-fit px-5">
        <h3 className="font-semibold text-xl text-brand-textHeader mb-3">
          Increased Online Visibility
        </h3>
        <p className="text-sm mt-3">
          Our websites are optimized for search engines, ensuring that your
          brand gets noticed and ranks higher in search results.
        </p>
      </div>
      <div className="flex flex-col w-fit px-5">
        <h3 className="font-semibold text-xl text-brand-textHeader mb-3">
          Higher User Engagement
        </h3>
        <p className="text-sm mt-3">
          Engage your users with captivating designs and interactive features
          that keep them coming back for more.
        </p>
      </div>
    </Slider>
  );
};

export default BenefitsSlider;
