import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
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
                  <a className="nav-link text-white" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/sport">
                    Sport
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/technology">
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
                    <a className="dropdown-item" href="/">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ar">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/de">
                      Germany (Standard)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/es">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/fr">
                      French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/he">
                      Hebrew
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/it">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/nl">
                      Dutch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/no">
                      Norwegian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pt">
                      Portuguese
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ru">
                      Russian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/sv">
                      Swedish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/zh">
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
