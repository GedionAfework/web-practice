import React, { Component } from "react";
import loading from "../giphy.webp";

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}
