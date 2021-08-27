import React, { Component } from "react";
import "../sass/App.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer id="main-footer">
        &#10084; from <span className="name">progmatic99</span>
      </footer>
    );
  }
}
