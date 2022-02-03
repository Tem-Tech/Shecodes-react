import React from "react";

export default function Icons(props) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${props.code}@2x.png`}
      height="35px"
      alt="icon"
    />
  );
}
