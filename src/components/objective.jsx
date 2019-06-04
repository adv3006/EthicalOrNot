import React, { Component } from "react";

class Objective extends Component {
  render() {
    return (
      <div id="objective" className="container mt-5 text-left">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="w-50 rounded mx-auto d-block"
              src={require("./image/black-horse.png")}
              alt="Black Horse Head In A Shield Comments - Black Horse Head Logo@pngkit.com"
            />
          </div>

          <div className="col-lg-6">
            <h3 className="font-weight-bold">
              The telemetry project's objective:
            </h3>
            <span>To use the Raspberry Pi and achieve 3 things:</span>
            <ol>
              <li>Create VPN network</li>
              <li>Collect data through Wardriving</li>
              <li>
                Web hosting <i>(in which you're seeing right now :-)</i>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Objective;
