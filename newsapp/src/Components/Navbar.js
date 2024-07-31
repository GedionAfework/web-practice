import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-secondary bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sport">
                    Sport
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">
                    Technology
                  </a>
                </li>
              </ul>
              <div className="dropdown mx-5">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Language
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Germany (Standard)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hebrew
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dutch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Norwegian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Portuguese
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Russian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Swedish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chinese
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
