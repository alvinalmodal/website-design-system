import React from "react";
const Font = ({
  fontFamily,
  fontWeight,
  text,
  fontSize,
  textDecoration,
  fontStyle,
}) => {
  textDecoration = textDecoration || "none";
  fontStyle = fontStyle || "normal";
  return (
    <React.Fragment>
      <p
        style={{
          fontFamily: `${fontFamily}`,
          fontWeight: `${fontWeight}`,
          fontSize: `${fontSize}`,
          textDecoration: `${textDecoration}`,
          fontStyle: `${fontStyle}`,
        }}
      >
        {text}
      </p>
    </React.Fragment>
  );
};

export default Font;
