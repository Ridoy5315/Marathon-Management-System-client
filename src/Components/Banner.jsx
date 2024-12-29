import React from 'react';
import PropTypes from 'prop-types';
import banner1 from '../assets/banner/banner3.jpg';
import banner2 from '../assets/banner/banner5.png';
import banner3 from '../assets/banner/banner6kids.jpg';
import banner4 from '../assets/banner/banner-4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
const Banner = props => {
     return (
          <>
            <Swiper
            spaceBetween={30}
            enteredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
              <SwiperSlide >
                <div
                  className="w-full relative bg-cover bg-center h-screen"
                  style={{ backgroundImage: `url(${banner1})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/55"></div>
                  <div className="w-10/12 mx-auto ">
                    <div className="relative text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                      <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                      Ready to elevate your marathon experience? Join us today!
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div
                  className="lg:w-full relative bg-cover bg-center h-screen"
                  style={{ backgroundImage: `url(${banner2})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/55"></div>
                  <div className="w-10/12 mx-auto ">
                    <div className="relative text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                      <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                      Discover events, track your progress, and achieve your goals effortlessly!
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full relative bg-cover bg-center h-screen"
                  style={{ backgroundImage: `url(${banner3})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/55"></div>
                  <div className="w-10/12 mx-auto ">
                    <div className="relative text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                      <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                      Empowering runners and organizers to cross the finish line together
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full relative bg-cover bg-center h-screen"
                  style={{ backgroundImage: `url(${banner4})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/55"></div>
                  <div className="w-10/12 mx-auto ">
                    <div className="relative text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                      <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                      Run, manage, succeed – the ultimate solution for marathon enthusiasts
                      </p>
                    </div>
                  </div>
                
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        );
};

Banner.propTypes = {
     
};

export default Banner;