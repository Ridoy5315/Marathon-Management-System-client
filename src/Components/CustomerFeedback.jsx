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
    <div className="w-10/12 mx-auto mt-24">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
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
              <div className="bg-gray-200 h-60 p-7 pt-10 rounded-3xl flex flex-col gap-6">
                <p>
                  his platform is amazing! Registering for marathons has never
                  been so seamless.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full">
                        <img src={man1} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary-color">
                        Daniel Carter
                      </h4>
                      <p className="font-medium">Runner</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 h-60 p-7 pt-10 rounded-3xl flex flex-col gap-6">
                <p>
                  What I appreciate the most is the live updates and leaderboard
                  feature during races.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="avatar">
                      <div className="w-14 h-14 h-14 rounded-full">
                        <img src={women1} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary-color">
                        Emily Carter
                      </h4>
                      <p className="font-medium">Marathoner</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 h-60 p-7 pt-10 rounded-3xl flex flex-col gap-6">
                <p>
                  This website has streamlined our registration process and
                  participant management.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full">
                        <img src={man2} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary-color">
                        Alice Williams
                      </h4>
                      <p className="font-medium">Event Organizer</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 h-60 p-7 pt-10 rounded-3xl flex flex-col gap-6">
                <p>
                  The event details maps are clear and easy to access. It’s my
                  go-to site for finding marathons near me!
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full">
                        <img src={man3} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary-color">
                        John Smith
                      </h4>
                      <p className="font-medium">Amateur Runner</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 h-60 p-7 pt-10 rounded-3xl flex flex-col gap-6">
                <p>
                  hThe analytics provided by this system have helped us improve
                  our event planning.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full">
                        <img src={women2} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary-color">
                        Sophie Taylor
                      </h4>
                      <p className="font-medium">Sports Coordinator</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 h-60 p-7 pt-10 rounded-3xl flex flex-col gap-6">
                <p>
                  I was hesitant about joining a marathon, but the resources on
                  this website gave me the confidence.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full">
                        <img src={man4} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary-color">
                        Michael Lee
                      </h4>
                      <p className="font-medium">First-time Runner</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-5xl text-[#071f5d67]">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="text-4xl font-semibold">What They Say About Us?</h2>
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
