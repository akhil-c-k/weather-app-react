import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Header.scss";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-inner-wrapper">
          <h1>Weather App</h1>
        </div>
      </div>
    );
  }
}
