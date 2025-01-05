import React, { useState } from "react";
import PropTypes from "prop-types";
import { BallTriangle, Oval } from "react-loader-spinner";

const LoadingSpinner = (props) => {
  //   const [isLoading, setIsLoading] = useState(true);

  //   setTimeout(() => setIsLoading(false), 3000);
  return (
    <div className="flex items-center justify-center gap-8 h-screen">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#F13735"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />

      <span className="text-3xl font-medium text-primary-color">Loading...</span>
    </div>
  );
};

LoadingSpinner.propTypes = {};

export default LoadingSpinner;
