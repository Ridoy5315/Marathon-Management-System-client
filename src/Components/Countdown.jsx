import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Countdown = ({ nextMarathon }) => {
  const targetDate = new Date(nextMarathon.nextRegistrationStartDate);
  const timeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  };

  const [left, setLeft] = useState(timeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setLeft(timeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!left) {
    return (
      <div className="text-center text-2xl font-bold">
        Registration date expired. you can look the others event!
      </div>
    );
  }
  return (
    <div className="text-center relative z-10 text-white lg:pt-12 md:pt-8 pt-6 lg:space-y-14 md:space-y-8 space-y-6">
      <div className="lg:space-y-6 md:space-y-3 space-y-2">
        <h4 className="lg:text-3xl md:text-2xl text-xl font-semibold">
          Next Event
        </h4>
        <p className="text-[#e2e0e0] lg:text-lg md:text-base text-xs">
          {format(new Date(nextMarathon.nextRegistrationStartDate), "PPPP")}
        </p>

        <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold">
          {nextMarathon.marathonName}
        </h2>
        <p className="text-[#e2e0e0] lg:text-2xl md:text-xl font-semibold">
          Get Ready! Registration Starts In:
        </p>
      </div>
      <div className="flex justify-center lg:gap-8 md:gap-6 gap-4">
        <div className="">
          <p className="border lg:py-8 lg:px-8 md:py-6 md:px-6 py-4 px-4 rounded-full lg:text-6xl md:text-5xl text-3xl font-bold">
            {left.days}
          </p>
          <span className="text-[#d5d4d4b2] lg:text-xl md:text-lg text-sm font-light">
            Days
          </span>
        </div>
        <div>
          <p className="border lg:py-8 lg:px-8 md:py-6 md:px-6 py-4 px-4 rounded-full lg:text-6xl md:text-5xl text-3xl font-bold">
            {left.hours}
          </p>
          <span className="text-[#d5d4d4b2] lg:text-xl md:text-lg text-sm font-light">
            Hours
          </span>
        </div>
        <div>
          <p className="border lg:py-8 lg:px-8 md:py-6 md:px-6 py-4 px-4 rounded-full lg:text-6xl md:text-5xl text-3xl font-bold">
            {left.minutes}
          </p>
          <span className="text-[#d5d4d4b2] lg:text-xl md:text-lg text-sm font-light">
            Minutes
          </span>
        </div>
        <div>
          <p className="border lg:py-8 lg:px-8 md:py-6 md:px-6 py-4 px-4 rounded-full lg:text-6xl md:text-5xl text-3xl font-bold">
            {left.seconds}
          </p>
          <span className="text-[#d5d4d4b2] lg:text-xl md:text-lg text-sm font-light">
            Seconds
          </span>
        </div>
      </div>

      <div className="">
        <button className="bg-secondary-color lg:px-10 lg:py-5 md:px-8 md:py-3 px-4 py-1 rounded-full font-semibold">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

Countdown.propTypes = {};

export default Countdown;
