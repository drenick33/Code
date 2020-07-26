import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=93f8e0d1209c6a742ff111372b6266fc`
    );
    try {
      const resJson = await apiRes.json();
      setWeather({
        temp: resJson.main.temp,
        city: resJson.name,
        country: resJson.sys.country,
        condition: resJson.weather[0].main,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     getWeather(query);
  //   };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            city={weather.city}
            temp={weather.temp}
            country={weather.country}
            condition={weather.condition}
            getWeather={getWeather}
          />
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          Error <br />
          <button onClick={() => setError(false)}>Reset</button>
        </div>
      ) : null}
      ;
    </div>
  );
};

export default WeatherEngine;
