import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
`;

const City = styled.div`
  font-family: "Merriweather", serif;
  font-size: 1.6rem;
`;

const Country = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;

const Location = (props) => {
    return (
      <Container>
        <City> Moscow</City>
        <Country>RU</Country>
      </Container>
    );
}
 
export default Location;