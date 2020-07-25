import React, { useState } from "react";
import styled from "@emotion/styled";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);

  return (
    <Container>
      {!inputMode && <City onClick={() => setInputMode(true)}>{city}</City>}
      {inputMode && (
        <Modify
          onSubmit={(e) => {
            e.preventDefault();
            getWeather(query);
          }}
        >
          <input
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
          <button onClick={() => setInputMode(false)}>Cancel</button>
        </Modify>
      )}
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;

const City = styled.div`
  font-family: "Merriweather", serif;
  font-size: 1.6rem;
  text-decoration-line: underline;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;

const Country = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;

const Modify = styled.form`
  scale: 80%;
`;
