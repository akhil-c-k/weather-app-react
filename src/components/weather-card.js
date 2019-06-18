import React from "react";
import ReactDOM from "react-dom";
import ReactAnimatedWeather from "react-animated-weather";
import Formcard from "./form-card";
import styles from "../styles/Weathercard.scss";
import {
  WeatherThemeProvider,
  Sunny,
  Rain,
  Snow,
  Cloudy
} from "weather-styled-icon";
import { TransitionGroup } from "react-transition-group";
const theme = {
  cloudsColor: "MidnightBlue",
  dropsColor: "white",
  boltColor: "lightBlue",
  backgroundColor: "Lavender",
  sunColor: "Orange",
  raysColor: "OrangeRed"
};

const weatherValue = {
  icon: "CLEAR_DAY",
  color: "goldenrod",
  size: 300,
  animate: true
};
const weatherValueRain = {
  icon: "RAIN",
  color: "white",
  size: 300,
  animate: true
};

export default class WeatherCard extends React.Component {
  render() {
    const { city, temperature, humidity, description, error } = this.props;
    const value = temperature >= 300 ? weatherValue : weatherValueRain;
    return (
      <div className="weather-card-wrapper">
        <TransitionGroup>
          <ReactAnimatedWeather
            icon={value.icon}
            color={value.color}
            size={value.size}
            animate={value.animate}
          />
        </TransitionGroup>
        <WeatherThemeProvider theme={theme}>
          <div className="weather-details">
            <p>
              City:<strong>{city}</strong>
            </p>
            <p>
              Temperature:
              <strong>
                <Sunny />
                {temperature}
              </strong>
            </p>
            <p>
              Humidity:
              <strong>
                {" "}
                <Cloudy />
                {humidity}
              </strong>
            </p>
            <p>
              Description:<strong>{description}</strong>
            </p>
            <p>
              erro:<strong>{error}</strong>
            </p>
          </div>
        </WeatherThemeProvider>
        <Formcard weatherLoad={this.props.weatherLoad} />
      </div>
    );
  }
}
