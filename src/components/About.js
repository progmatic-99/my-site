import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "../sass/App.scss";

export default class About extends Component {
  render() {
    return (
      <main id="about">
        <h1 className="lg-heading">About</h1>
        <h3 className="sm-heading">Little bit about me....</h3>
        <div className="about-info">
          <div className="bio-text">
            <p>
              <span className="intro">
                Hi <FontAwesomeIcon icon={["far", "hand-peace"]} />,{" "}
              </span>
              {
                "I'm a developer, competitive programmer(kind of) from India. I'm an avid Open Source contributor."
              }
            </p>
            <p>
              I have worked with different languages like{" "}
              <span className="tech">Golang, JavaScript, C/C++, Python</span>{" "}
              and frameworks like{" "}
              <span className="tech">Django, Flask, React, Ember, Gorilla</span>
              .
            </p>
            <p>
              <span>Open Source projects</span> that I actively contribute to:
            </p>
            <ul>
              <li>
                <p>
                  <a
                    href="https://github.com/fossasia/open-event-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open-event-frontend:
                  </a>{" "}
                  Frontend for{" "}
                  <a href="eventyay.com" className="open-head">
                    eventyay
                  </a>{" "}
                  which is written in Ember.js
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/fossasia/open-event-server/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open-event-server:
                  </a>{" "}
                  Python backend for{" "}
                  <a
                    href="eventyay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-head"
                  >
                    eventyay
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/matrix-org/dendrite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dendrite:
                  </a>{" "}
                  This is a second-generation Matrix homeserver written in Go.
                  It intends to provide an efficient, reliable and scalable
                  alternative to{" "}
                  <a
                    href="https://github.com/matrix-org/synapse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-head"
                  >
                    Synapse
                  </a>
                  .
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}
