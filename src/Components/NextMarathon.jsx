import React, { useState } from "react";
import PropTypes from "prop-types";
import Countdown from "./Countdown";
import winning from "../assets/upcoming/win2.jpg";
const NextMarathon = (props) => {
  return (
    <div
      className="w-full relative bg-cover bg-center lg:h-[650px] md:h-[500px] h-[360px]"
      style={{ backgroundImage: `url(${winning})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#5E5D5D]/70 to-[#5E5D5D]/70 "></div>
      <Countdown targetDate="2025-01-15T00:00:00"></Countdown>
    </div>
  );
};

NextMarathon.propTypes = {};

export default NextMarathon;
