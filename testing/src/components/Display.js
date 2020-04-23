import React from "react";

const Display = ({ balls, strikes }) => {
  return (
    <div className="">
      <div>
        <h2>Balls</h2>
        <div>{balls}</div>
        <div></div>
      </div>
      <div>
        <h2>Strikes</h2>
        <div>{strikes}</div>
      </div>
    </div>
  );
};

export default Display;
