import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CustomNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Telemetry - CS440 Final Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#objective">
                  Objective
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#device">
                  Device/OS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vpn">
                  VPN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#script">
                  Script/Result
                </a>
              </li>
              <Button variant="outline-light" onLogOut="yes">
                Logout
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default CustomNavBar;
