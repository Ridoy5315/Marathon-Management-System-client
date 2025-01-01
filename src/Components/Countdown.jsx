import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Countdown = ({ targetDate }) => {
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

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  if (!left) {
    return (
      <div className="text-center text-2xl font-bold">
        Registration date expired. you can look the others event!
      </div>
    );
  }
  return (
    <div className="text-center relative z-10 text-white pt-12 space-y-14">
      <div className="space-y-6">
        <h4 className="text-3xl font-semibold">Next Event</h4>
        <p className="text-[#e2e0e0] text-lg">JAN 25, 2025</p>
        <h2 className="text-6xl font-semibold">EARTH DAY ECO RUN</h2>
        <p className="text-[#e2e0e0] text-2xl font-semibold">
          Registration Time Remaining
        </p>
      </div>
      <div className="flex justify-center gap-8">
        <div className="">
          <p className="border py-8 px-8 rounded-full text-6xl font-bold">
            {left.days}
          </p>
            <span className="text-[#d5d4d4b2] text-xl font-light">Days</span>
        </div>
        <div>
          <p className="border py-8 px-8 rounded-full text-6xl font-bold">
            {left.hours}
          </p>
            <span className="text-[#d5d4d4b2] text-xl font-light">Hours</span>
        </div>
        <div>
          <p className="border py-8 px-8 rounded-full text-6xl font-bold">
            {left.minutes}
          </p>
            <span className="text-[#d5d4d4b2] text-xl font-light">Minutes</span>
        </div>
        <div>
          <p className="border py-8 px-8 rounded-full text-6xl font-bold">
            {left.seconds}
          </p>
            <span className="text-[#d5d4d4b2] text-xl font-light">Seconds</span>
        </div>
        {/* {left.days} Days {left.hours} Hours {left.minutes} Minutes{" "}
        {left.seconds} Seconds */}
      </div>
      <div className="">
        <button className="bg-secondary-color px-10 py-5 rounded-full font-semibold">REGISTER NOW</button>
      </div>
    </div>
  );
};

Countdown.propTypes = {};

export default Countdown;
