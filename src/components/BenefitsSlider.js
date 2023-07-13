import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faAward,
  faEye,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const BenefitsSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 722,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="my-8 text-center">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center mx-auto w-11/12 h-80 bg-brand-primary/60 rounded-lg">
          <div className="bg-gray-200/5 border-gray-800 border rounded-lg w-full h-full p-4">
            <FontAwesomeIcon
              icon={faUserCheck}
              className="bg-brand-secondary/5 text-brand-secondary p-5 rounded-full w-10 h-10 m-3"
            />
            <div className="flex mb-3 sm:px-5 items-center justify-center gap-2">
              <p className="font-bold text-2xl text-brand-secondary/40">{`{/*`}</p>
              <h3 className="font-semibold text-lg text-brand-textHeader">
                Improved User Experience
              </h3>
              <p className="font-bold text-2xl text-brand-secondary/40">{`*/}`}</p>
            </div>
            <p className="text-sm mt-3">
              We design websites that provide a seamless and intuitive user
              experience, making it easy for visitors to navigate and interact
              with your content.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center mx-auto w-11/12 h-80 bg-brand-primary/60 rounded-lg">
          <div className="bg-gray-200/5 border-gray-800 border rounded-lg w-full h-full p-4">
            <FontAwesomeIcon
              icon={faAward}
              className="bg-brand-secondary/5 text-brand-secondary p-5 rounded-full w-10 h-10 m-3"
            />
            <div className="flex mb-3 sm:px-5 items-center justify-center gap-2">
              <p className="font-bold text-2xl text-brand-secondary/40">{`{/*`}</p>
              <h3 className="font-semibold text-lg text-brand-textHeader">
                Enhanced Brand Credibility
              </h3>
              <p className="font-bold text-2xl text-brand-secondary/40">{`*/}`}</p>
            </div>
            <p className="text-sm mt-3">
              A professionally designed website reflects the credibility and
              professionalism of your brand, helping to establish trust with
              your audience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center mx-auto w-11/12 h-80 bg-brand-primary/60 rounded-lg">
          <div className="bg-gray-200/5 border-gray-800 border rounded-lg w-full h-full p-4">
            <FontAwesomeIcon
              icon={faEye}
              className="bg-brand-secondary/5 text-brand-secondary p-5 rounded-full w-10 h-10 m-3"
            />
            <div className="flex mb-3 sm:px-5 items-center justify-center gap-2">
              <p className="font-bold text-2xl text-brand-secondary/40">{`{/*`}</p>
              <h3 className="font-semibold text-lg text-brand-textHeader">
                Increased Online Visibility
              </h3>
              <p className="font-bold text-2xl text-brand-secondary/40">{`*/}`}</p>
            </div>
            <p className="text-sm mt-3">
              Our websites are optimized for search engines, ensuring that your
              brand gets noticed and ranks higher in search results.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center mx-auto w-11/12 h-80 bg-brand-primary/60 rounded-lg">
          <div className="bg-gray-200/5 border-gray-800 border rounded-lg w-full h-full p-4">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className="bg-brand-secondary/5 text-brand-secondary p-5 rounded-full w-10 h-10 m-3"
            />
            <div className="flex mb-3 sm:px-5 items-center justify-center gap-2">
              <p className="font-bold text-2xl text-brand-secondary/40">{`{/*`}</p>
              <h3 className="font-semibold text-lg text-brand-textHeader">
                Higher User Engagement
              </h3>
              <p className="font-bold text-2xl text-brand-secondary/40">{`*/}`}</p>
            </div>
            <p className="text-sm mt-3">
              Engage your users with captivating designs and interactive
              features that keep them coming back for more.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default BenefitsSlider;
