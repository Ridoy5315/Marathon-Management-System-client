import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import man1 from "../assets/customer/1.jpg";
import man2 from "../assets/customer/2.jpg";
import man3 from "../assets/customer/3.jpeg";
import man4 from "../assets/customer/4.jpg";
import women1 from "../assets/customer/5.jpeg";
import women2 from "../assets/customer/6.jpg";
import { FaArrowRightLong, FaQuoteRight } from "react-icons/fa6";
const CustomerFeedback = (props) => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto lg:mt-24 md:mt-20 mt-16">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-6">
        {/* for medium and small device */}
        <div className="lg:col-span-2 block lg:hidden space-y-4">
          <h2 className=" md:text-4xl text-3xl text-primary-color font-semibold">
            What They Say About Us?
          </h2>
          <p className="font-light md:text-base text-sm text-justify md:pr-24">
            See what participants and organizers are saying about us! Discover
            how we’re making marathons better for everyone. Don’t just take our
            word for it—hear it straight from the runners and organizers
            themselves!
          </p>
        </div>
        <div className="lg:col-span-3">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-gray-200 lg:h-60 md:h-60 h-52 lg:p-7 md:p-7 p-4 lg:pt-10 md:pt-10 pt-6 rounded-3xl flex flex-col lg:gap-6 md:gap-6 gap-4">
                <p className="text-justify lg:text-left md:text-left lg:text-base md:text-base text-sm">
                  his platform is amazing! Registering for marathons has never
                  been so seamless.
                </p>
                <div className="flex justify-between">
                  <div className="flex lg:gap-4 md:gap-4 gap-2">
                    <div className="avatar">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full">
                        <img src={man1} />
                      </div>
                    </div>
                    <div>
                      <h4 className="lg:text-xl md:text-xl text-sm font-semibold text-secondary-color">
                        Daniel Carter
                      </h4>
                      <p className="font-medium bg:text-base md:text-base text-xs">Runner</p>
                    </div>
                  </div>
                  <div className="lg:block md:block hidden">
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 lg:h-60 md:h-60 h-52 lg:p-7 md:p-7 p-4 lg:pt-10 md:pt-10 pt-6 rounded-3xl flex flex-col lg:gap-6 md:gap-6 gap-4">
                <p className="text-justify lg:text-left md:text-left lg:text-base md:text-base text-sm">
                  What I appreciate the most is the live updates and leaderboard
                  feature during races.
                </p>
                <div className="flex justify-between">
                  <div className="flex lg:gap-4 md:gap-4 gap-2">
                    <div className="avatar">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full">
                        <img src={women1} />
                      </div>
                    </div>
                    <div>
                      <h4 className="lg:text-xl md:text-xl text-sm font-semibold text-secondary-color">
                        Emily Carter
                      </h4>
                      <p className="font-medium bg:text-base md:text-base text-xs">Marathoner</p>
                    </div>
                  </div>
                  <div className="lg:block md:block hidden">
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 lg:h-60 md:h-60 h-52 lg:p-7 md:p-7 p-4 lg:pt-10 md:pt-10 pt-6 rounded-3xl flex flex-col lg:gap-6 md:gap-6 gap-4">
                <p className="text-justify lg:text-left md:text-left lg:text-base md:text-base text-sm">
                  This website has streamlined our registration process and
                  participant management.
                </p>
                <div className="flex justify-between">
                  <div className="flex lg:gap-4 md:gap-4 gap-2">
                    <div className="avatar">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full">
                        <img src={man2} />
                      </div>
                    </div>
                    <div>
                      <h4 className="lg:text-xl md:text-xl text-sm font-semibold text-secondary-color">
                        Alice Williams
                      </h4>
                      <p className="font-medium bg:text-base md:text-base text-xs">Event Organizer</p>
                    </div>
                  </div>
                  <div className="lg:block md:block hidden">
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 lg:h-60 md:h-60 h-52 lg:p-7 md:p-7 p-4 lg:pt-10 md:pt-10 pt-6 rounded-3xl flex flex-col lg:gap-6 md:gap-6 gap-4">
                <p className="text-justify lg:text-left md:text-left lg:text-base md:text-base text-sm">
                  The event details maps are clear and easy to access. It’s my
                  go-to site for finding marathons near me!
                </p>
                <div className="flex justify-between">
                  <div className="flex lg:gap-4 md:gap-4 gap-2">
                    <div className="avatar">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full">
                        <img src={man3} />
                      </div>
                    </div>
                    <div>
                      <h4 className="lg:text-xl md:text-xl text-sm font-semibold text-secondary-color">
                        John Smith
                      </h4>
                      <p className="font-medium bg:text-base md:text-base text-xs">Amateur Runner</p>
                    </div>
                  </div>
                  <div className="lg:block md:block hidden">
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 lg:h-60 md:h-60 h-52 lg:p-7 md:p-7 p-4 lg:pt-10 md:pt-10 pt-6 rounded-3xl flex flex-col lg:gap-6 md:gap-6 gap-4">
                <p className="text-justify lg:text-left md:text-left lg:text-base md:text-base text-sm">
                  hThe analytics provided by this system have helped us improve
                  our event planning.
                </p>
                <div className="flex justify-between">
                  <div className="flex lg:gap-4 md:gap-4 gap-2">
                    <div className="avatar">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full">
                        <img src={women2} />
                      </div>
                    </div>
                    <div>
                      <h4 className="lg:text-xl md:text-xl text-sm font-semibold text-secondary-color">
                        Sophie Taylor
                      </h4>
                      <p className="font-medium bg:text-base md:text-base text-xs">Sports Coordinator</p>
                    </div>
                  </div>
                  <div className="lg:block md:block hidden">
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 lg:h-60 md:h-60 h-52 lg:p-7 md:p-7 p-4 lg:pt-10 md:pt-10 pt-6 rounded-3xl flex flex-col lg:gap-6 md:gap-6 gap-4">
                <p className="text-justify lg:text-left md:text-left lg:text-base md:text-base text-sm">
                  I was hesitant about joining a marathon, but the resources on
                  this website gave me the confidence.
                </p>
                <div className="flex justify-between">
                  <div className="flex lg:gap-4 md:gap-4 gap-2">
                    <div className="avatar">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full">
                        <img src={man4} />
                      </div>
                    </div>
                    <div>
                      <h4 className="lg:text-xl md:text-xl text-sm font-semibold text-secondary-color">
                        Michael Lee
                      </h4>
                      <p className="font-medium bg:text-base md:text-base text-xs">First-time Runner</p>
                    </div>
                  </div>
                  <div className="lg:block md:block hidden">
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex lg:hidden flex-row-reverse">
          <button className="bg-secondary-color md:px-5 md:py-3 px-4 py-1.5 flex items-center text-white rounded-3xl">
            See More{" "}
            <span className="ml-2">
              <FaArrowRightLong></FaArrowRightLong>
            </span>
          </button>
        </div>
        {/* for large device */}
        <div className="lg:col-span-2 lg:block hidden space-y-4">
          <h2 className="text-4xl text-primary-color font-semibold">
            What They Say About Us?
          </h2>
          <p className="font-light">
            See what participants and organizers are saying about us! Discover
            how we’re making marathons better for everyone. Don’t just take our
            word for it—hear it straight from the runners and organizers
            themselves!
          </p>

          <div className="flex flex-row-reverse">
            <button className="bg-secondary-color px-5 py-3 flex items-center text-white rounded-3xl">
              See More{" "}
              <span className="ml-2">
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomerFeedback.propTypes = {};

export default CustomerFeedback;
