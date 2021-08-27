import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import portfolio from "../assets/portfolio.png";

export default class Projects extends Component {
  render() {
    return (
      <main id="project">
        <h1 className="lg-heading">
          <span className="text-secondary">Projects</span>
        </h1>
        <h2 className="sm-heading">Have a look at my projects....</h2>
        <div className="projects">
          <div className="item">
            <a href="#!">
              <img src={portfolio} alt="portfolio-website" />
            </a>
            <a href="https://progmatic-99.github.io" className="btn-light">
              <FontAwesomeIcon icon={["fas", "eye"]} /> Portfolio Website
            </a>
            <a
              href="https://github.com/progmatic-99/progmatic-99.github.io"
              className="btn-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} /> Github
            </a>
          </div>
        </div>
      </main>
    );
  }
}
