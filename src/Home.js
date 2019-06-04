import React, { Component } from "react";
import fire from "./config/Fire";
import { Button } from "react-bootstrap";
import Objective from "./components/objective";
import Device from "./components/device";
import VPN from "./components/vpn";
import Collect from "./components/collect";
import CustomJumbotron from "./components/jumbotron";
import { Link, animateScroll as scroll } from "react-scroll";
import Hosting from "./components/hosting";
import Signature from "./components/signature";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="objective"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    Objective
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="device"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    Device/OS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="vpn"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    VPN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="script"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    Script/Result
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="hosting"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={800}
                  >
                    Web Hosting
                  </Link>
                </li>
                <Button variant="outline-light" onClick={this.logout}>
                  Logout
                </Button>
              </ul>
            </div>
          </div>
        </nav>
        <CustomJumbotron />
        <Objective />
        <Device />
        <VPN />
        <Collect />
        <Hosting />
        <Signature />
      </div>
    );
  }
}

export default Home;
