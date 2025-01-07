import React from "react";
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
  return (
    <div
      className="w-full relative bg-cover bg-center h-[650px] mt-24"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/65 "></div>
      <div className=" space-y-8 relative z-10 pt-10 overflow-hidden">
        <p className="text-6xl text-center text-gray-200 font-bold ">
          <Typewriter
            words={["UPCOMING EVENTS", "Future Challenges", "Upcoming Runs"]}
            loop={5}
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
        //dot dot
        //    pagination={{
        //      clickable: true,
        //    }}
        //    navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" text-white flex justify-between px-32 pt-14">
            <div className="flex flex-col gap-8 justify-center overflow-hidden">
              <Fade
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] text-xl flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    2025/11/25
                  </span>
                </p>
                <p className="font-semibold text-4xl text-secondary-color">
                  RUNNING FESTIVAL
                </p>
                <p className="text-[#dcdcdc96] text-xl flex items-center ">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    Central Park
                  </span>
                </p>
              </Fade>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="h-72 w-[500px] ">
                <img
                  className="h-full w-full border-t-8 border-t-primary-color border-b-8 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className=" text-white flex justify-between px-32 pt-14">
            <div className="flex flex-col gap-8 justify-center overflow-hidden">
              <Fade
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] text-xl flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    2026/02/21
                  </span>
                </p>
                <p className="font-semibold text-4xl text-secondary-color">
                  AUTUMN START
                </p>
                <p className="text-[#dcdcdc96] text-xl flex items-center ">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    NY Central Hill
                  </span>
                </p>
              </Fade>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="h-72 w-[500px] ">
                <img
                  className="h-full w-full border-t-8 border-t-primary-color border-b-8 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div className=" text-white flex justify-between px-32 pt-14">
            <div className="flex flex-col gap-8 justify-center overflow-hidden">
              <Fade
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] text-xl flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    2025/09/17
                  </span>
                </p>
                <p className="font-semibold text-4xl text-secondary-color">
                  PRE-RUN NYC
                </p>
                <p className="text-[#dcdcdc96] text-xl flex items-center ">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    Boston West Road
                  </span>
                </p>
              </Fade>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="h-72 w-[500px] ">
                <img
                  className="h-full w-full border-t-8 border-t-primary-color border-b-8 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div className=" text-white flex justify-between px-32 pt-14">
            <div className="flex flex-col gap-8 justify-center overflow-hidden">
              <Fade
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] text-xl flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    2026/02/10
                  </span>
                </p>
                <p className="font-semibold text-4xl text-secondary-color">
                  Winter Wonderland Marathon
                </p>
                <p className="text-[#dcdcdc96] text-xl flex items-center ">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    Arizona City Park
                  </span>
                </p>
              </Fade>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="h-72 w-[500px] ">
                <img
                  className="h-full w-full border-t-8 border-t-primary-color border-b-8 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 5 */}
        <SwiperSlide>
          <div className=" text-white flex justify-between px-32 pt-14">
            <div className="flex flex-col gap-8 justify-center overflow-hidden">
              <Fade
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] text-xl flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    2025/11/19
                  </span>
                </p>
                <p className="font-semibold text-4xl text-secondary-color">
                  Night Glow Run
                </p>
                <p className="text-[#dcdcdc96] text-xl flex items-center ">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    Dublin, Ireland
                  </span>
                </p>
              </Fade>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="h-72 w-[500px] ">
                <img
                  className="h-full w-full border-t-8 border-t-primary-color border-b-8 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
                  src={slider5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 6 */}
        <SwiperSlide>
          <div className=" text-white flex justify-between px-32 pt-14">
            <div className="flex flex-col gap-8 justify-center overflow-hidden">
              <Fade
                delay={100}
                duration={1000}
                triggerOnce
                direction="left"
                cascade
                damping={0.3}
              >
                <p className="text-[#dcdcdc96] text-xl flex items-center">
                  Possible registration start date:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    2026/07/21
                  </span>
                </p>
                <p className="font-semibold text-4xl text-secondary-color">
                  Run Challenge
                </p>
                <p className="text-[#dcdcdc96] text-xl flex items-center ">
                  Location:{" "}
                  <span className="ml-4 font-medium text-gray-200  text-4xl">
                    Vancouver, Canada
                  </span>
                </p>
              </Fade>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row-reverse">
                <div className="bg-secondary-color px-4 py-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>
                </div>
              </div>
              <div className="h-72 w-[500px] ">
                <img
                  className="h-full w-full border-t-8 border-t-primary-color border-b-8 border-b-secondary-color rounded-tr-3xl rounded-bl-3xl"
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
