import React from "react";
import ReactDOM from "react-dom";
import Header from "../header";
import Weather from "../weather-card";
import "../../styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }
  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=25d2fb259331c4fa78a2b61c67a49cc6`
    );

    const response = await api_call.json();
    console.log(response);

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Weather
          weatherLoad={this.getWeather}
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
