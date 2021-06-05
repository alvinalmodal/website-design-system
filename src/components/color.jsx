import React from "react";

const Color = ({ colorName, backgroundColor, foreColor }) => {
  return (
    <React.Fragment>
      <div
        className="inline-block colors"
        style={{ backgroundColor: `${backgroundColor}`, color: `${foreColor}` }}
      >
        <p>{colorName}</p> <p>{backgroundColor}</p>
      </div>
    </React.Fragment>
  );
};

export default Color;
