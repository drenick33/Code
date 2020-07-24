import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 42%;
  `;
  return (
    <Icon
      className="icon"
      src="./icons/Mostly Cloudy-2x.png"
      alt="Weather Icon"
    />
  );
};

export default Icon;
