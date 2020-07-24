import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const Card = styled.div`
  margin: 0 auto;
  background: linear-gradient(to top, pink, purple);
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
`;

const WeatherCard = (props) => {
  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
