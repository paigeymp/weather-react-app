import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="container containercss">
        <div className="card weather-app rounded-3 p-5">
          <div className="row ms-1">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="searchBox"
                  autocomplete="off"
                  placeholder="Enter a city..."
                  onChange={updateCity}
                  className="rounded-2 border border-1 searchBox"
                />

                <button
                  type="submit"
                  id="search-city-btn"
                  name="submitButton"
                  className="rounded-2 border border-0 submitButton"
                >
                  Search
                </button>

                <button className="rounded-2 border border-0 submitButton">
                  Find Location
                </button>
              </form>
            </div>
            <div className="col">
              <span
                className="badge rounded-pill text-bg-primary me-5"
                id="current-date-time"
              ></span>
              <span className="homeButton me-1"></span>
              <span className="settingsButton"></span>
            </div>
          </div>

          <div className="position-relative">
            <div className="row ms-1 text-center mt-5 m-3">
              <div className="col">
                <ul>
                  <li>
                    <span className="currentCity"> {weather.name} </span>
                  </li>
                  <li className="dayWeather getData">
                    {" "}
                    <img src={weather.icon} alt={weather.description} />
                  </li>
                  <li>
                    <span className="day-temp">
                      {Math.round(weather.temperature)}
                      <span></span>
                    </span>
                    <span className="units" id="units-weather">
                      °C
                    </span>
                  </li>
                  <li className="dayWeather">
                    <span className="feelsLike">{weather.description}</span>
                  </li>

                  <li className="dayWeather mt-3">
                    Wind:
                    <span id="windspeed"> {Math.round(weather.wind)}km/h</span>
                  </li>

                  <li className="dayWeather">
                    {" "}
                    Humidity:
                    <span> {weather.humidity}%</span>
                  </li>
                  <li>
                    <a
                      className="clickUnits"
                      id="units-celsius"
                      href="/"
                      rel="noreferrer"
                    >
                      <span className="clickUnits">°C</span>
                    </a>
                    <span> | </span>
                    <a className="clickUnits" href="/" rel="noreferrer">
                      <span className="clickUnits">°F</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row m-1 p-1">
            <p className="forecast">Next 5 days</p>
            <hr />

            <div className="col bg-dark m-1 rounded bg-opacity-50">
              <div className="text-center text-light">
                <div>Monday</div>
                <div className="forecastTemp">10°</div>
                <p className="forecastCondition">A mix of sun and clouds</p>
              </div>
            </div>

            <div className="col bg-dark m-1 rounded bg-opacity-50">
              <div className="text-center text-light">
                <div>Tuesday</div>
                <div className="forecastTemp">13°</div>
                <p className="forecastCondition">Sunny</p>
              </div>
            </div>

            <div className="col bg-dark m-1 rounded bg-opacity-50">
              <div className="text-center text-light">
                <div>Wednesday</div>
                <div className="forecastTemp">
                  <i className="fa-solid fa-cloud-sun-rain"></i>
                  10°
                </div>
                <p className="forecastCondition">Scattered showers</p>
              </div>
            </div>

            <div className="col bg-dark m-1 rounded bg-opacity-50">
              <div className="text-center text-light">
                <div>Thursday</div>
                <div className="forecastTemp">
                  <i className="fa-solid fa-sun"></i>
                  9°
                </div>
                <p className="forecastCondition">Sunny</p>
              </div>
            </div>

            <div className="col bg-dark m-1 rounded bg-opacity-50">
              <div className="text-center text-light">
                <div>Friday</div>
                <div className="forecastTemp">11°</div>
                <p className="forecastCondition">Sunny</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          Coded by Paige Powell and{" "}
          <a
            href="https://github.com/paigeymp/weather-react-app"
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            open-sourced
          </a>{" "}
          <br />
          Background image by Pixabay on
          <a
            href="https://www.pexels.com/photo/beautiful-clouds-cloudy-dramatic-209831/"
            target="_blank"
            rel="noreferrer"
            title="pexels"
          >
            Pexels
          </a>
        </footer>
      </div>
    </div>
  );
}
