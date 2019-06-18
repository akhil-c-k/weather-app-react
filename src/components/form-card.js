import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Formcard.scss";
export default class Formcard extends React.Component {
  render() {
    return (
      <div className="form-card-wrapper">
        <div className="form-card-inner-wrapper">
          <form onSubmit={this.props.weatherLoad}>
            <input
              type="text"
              placeholder="city"
              className="form-card-text"
              name="city"
            />
            <input
              type="text"
              placeholder="country"
              className="form-card-text"
              name="country"
            />
            <button>Get Weather</button>
          </form>
        </div>
      </div>
    );
  }
}
