import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-secondary bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News App
            </Link>
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
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sport">
                    Sport
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
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
                    <Link className="dropdown-item" to="#">
                      English
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Arabic
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Germany (Standard)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Spanish
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      French
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Hebrew
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Italian
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Dutch
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Norwegian
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Portuguese
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Russian
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Swedish
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Chinese
                    </Link>
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
