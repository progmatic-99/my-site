import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "../sass/App.scss";

export class Home extends Component {
  render() {
    return (
      <main id="home">
        <h1 className="lg-heading">
          Shubham <span className="text-secondary">Upreti</span>
        </h1>
        <h3 className="sm-heading">Developer | Engineer | Freelancer</h3>
        <div className="icons">
          <a
            href="https://twitter.com/progmatic99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-upreti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
          <a
            href="https://github.com/progmatic-99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
          <a
            href="mailto:shubham.upreti@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "google"]} size="2x" />
          </a>
        </div>
      </main>
    );
  }
}

export default Home;
