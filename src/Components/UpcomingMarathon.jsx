import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import backGround from "../assets/upcoming/bg2.avif";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../assets/upcoming/slider1.avif";
import slider2 from "../assets/upcoming/slider2.avif";
import slider3 from "../assets/upcoming/slider3.jpg";
import slider4 from "../assets/upcoming/slider4.avif";
import slider5 from "../assets/upcoming/slider5.avif";
import slider6 from "../assets/upcoming/slider6.avif";
import { FaArrowRightLong } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
const UpcomingMarathon = (props) => {
  const [fadeKey, setFadeKey] = useState(0);

  const handleSlideChange = () => {
    setFadeKey((prevKey) => prevKey + 1);
  };
  return (
    <div
      className="w-full relative bg-cover bg-center lg:h-[650px] md:h-[550px] h-[450px] lg:mt-24 mt-16"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/65 "></div>
      <div className="lg:space-y-8 space-y-2 relative z-10 lg:pt-10 pt-6 overflow-hidden">
        <p className="lg:text-6xl md:text-4xl text-2xl text-center text-gray-200 font-bold overflow-hidden">
          <Typewriter
            words={["UPCOMING EVENTS", "Future Challenges", "Upcoming Runs"]}
            loop={false}
            cursor
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1500}
          ></Typewriter>
        </p>
        <div className="border-b-2 border-gray-400 w-6/12 mx-auto"></div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" text-white flex lg:flex-row flex-col justify-between lg:px-32 md:px-12 px-6 lg:pt-14 pt-6">
            <div className="flex flex-col lg:gap-8 gap-2 justify-center overflow-hidden">
              <Fade
              key={fadeKey}
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    2025/11/25
                  </span>
                </p>
                <p className="font-semibold lg:text-4xl md:text-3xl text-2xl text-secondary-color">
                  RUNNING FESTIVAL
                </p>
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center ">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    Central Park
                  </span>
                </p>
              </Fade>
            </div>
            <div className="lg:space-y-3">
              <div className="flex  flex-row-reverse">
                <div className="bg-secondary-color lg:block hidden px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="lg:h-72 lg:w-[500px] md:h-72 h-52 lg:mt-0 mt-4 flex justify-center" >
                <img
                  className="h-full lg:w-full lg:border-t-8 md:border-t-8 border-t-4 border-t-primary-color lg:border-b-8 md:border-b-8 border-b-4 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider1}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className=" text-white flex lg:flex-row flex-col justify-between lg:px-32 md:px-12 px-6 lg:pt-14 pt-6">
            <div className="flex flex-col lg:gap-8 gap-2 justify-center overflow-hidden">
              <Fade
              key={fadeKey}
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    2026/02/21
                  </span>
                </p>
                <p className="font-semibold lg:text-4xl md:text-3xl text-2xl text-secondary-color">
                  AUTUMN START
                </p>
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    NY Central Hill
                  </span>
                </p>
              </Fade>
            </div>
            <div className="lg:space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color lg:block hidden px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="lg:h-72 lg:w-[500px] md:h-72 h-52 lg:mt-0 mt-4 flex justify-center">
                <img
                  className="h-full lg:w-full lg:border-t-8 md:border-t-8 border-t-4 border-t-primary-color lg:border-b-8 md:border-b-8 border-b-4 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div className=" text-white flex lg:flex-row flex-col justify-between lg:px-32 md:px-12 px-6 lg:pt-14 pt-6">
            <div className="flex flex-col lg:gap-8 gap-2 justify-center overflow-hidden">
              <Fade
              key={fadeKey}
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    2025/09/17
                  </span>
                </p>
                <p className="font-semibold lg:text-4xl md:text-3xl text-2xl text-secondary-color">
                  PRE-RUN NYC
                </p>
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    Boston West Road
                  </span>
                </p>
              </Fade>
            </div>
            <div className="lg:space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color lg:block hidden px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="lg:h-72 lg:w-[500px] md:h-72 h-52 lg:mt-0 mt-4 flex justify-center">
                <img
                  className="h-full lg:w-full lg:border-t-8 md:border-t-8 border-t-4 border-t-primary-color lg:border-b-8 md:border-b-8 border-b-4 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div className=" text-white flex lg:flex-row flex-col justify-between lg:px-32 md:px-12 px-6 lg:pt-14 pt-6">
            <div className="flex flex-col lg:gap-8 gap-2 justify-center overflow-hidden">
              <Fade
              key={fadeKey}
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    2026/02/10
                  </span>
                </p>
                <p className="font-semibold lg:text-4xl md:text-3xl text-2xl text-secondary-color">
                  Winter Wonderland Marathon
                </p>
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    Arizona City Park
                  </span>
                </p>
              </Fade>
            </div>
            <div className="lg:space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color lg:block hidden px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="lg:h-72 lg:w-[500px] md:h-72 h-52 lg:mt-0 mt-4 flex justify-center">
                <img
                  className="h-full lg:w-full lg:border-t-8 md:border-t-8 border-t-4 border-t-primary-color lg:border-b-8 md:border-b-8 border-b-4 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 5 */}
        <SwiperSlide>
          <div className=" text-white flex lg:flex-row flex-col justify-between lg:px-32 md:px-12 px-6 lg:pt-14 pt-6">
            <div className="flex flex-col lg:gap-8 gap-2 justify-center overflow-hidden">
              <Fade
              key={fadeKey}
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    2025/11/19
                  </span>
                </p>
                <p className="font-semibold lg:text-4xl md:text-3xl text-2xl text-secondary-color">
                  Night Glow Run
                </p>
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    Dublin, Ireland
                  </span>
                </p>
              </Fade>
            </div>
            <div className="lg:space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color lg:block hidden px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="lg:h-72 lg:w-[500px] md:h-72 h-52 lg:mt-0 mt-4 flex justify-center">
                <img
                  className="h-full lg:w-full lg:border-t-8 md:border-t-8 border-t-4 border-t-primary-color lg:border-b-8 md:border-b-8 border-b-4 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 6 */}
        <SwiperSlide>
          <div className=" text-white flex lg:flex-row flex-col justify-between lg:px-32 md:px-12 px-6 lg:pt-14 pt-6">
            <div className="flex flex-col lg:gap-8 gap-2 justify-center overflow-hidden">
              <Fade
              key={fadeKey}
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    2026/07/21
                  </span>
                </p>
                <p className="font-semibold lg:text-4xl md:text-3xl text-2xl text-secondary-color">
                  Run Challenge
                </p>
                <p className="text-[#dcdcdc96] lg:text-xl md:text-base text-sm flex items-center">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  lg:text-4xl md:text-3xl text-2xl">
                    Vancouver, Canada
                  </span>
                </p>
              </Fade>
            </div>
            <div className="lg:space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color lg:block hidden px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="lg:h-72 lg:w-[500px] md:h-72 h-52 lg:mt-0 mt-4 flex justify-center">
                <img
                  className="h-full lg:w-full lg:border-t-8 md:border-t-8 border-t-4 border-t-primary-color lg:border-b-8 md:border-b-8 border-b-4 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider6}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

UpcomingMarathon.propTypes = {};

export default UpcomingMarathon;
