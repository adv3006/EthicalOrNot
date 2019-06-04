import React, { Component } from "react";

class Collect extends Component {
  state = {};
  render() {
    return (
      <div id="script" className="mt-5 container-fluid">
        <div className="row">
          <h3 className="col-lg-6 text-left font-weight-bold">
            The script for collecting data
          </h3>
          <h3 className="col-lg-6 text-center font-weight-bold">The Result</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe
                title="script"
                className="embed-responsive-item"
                src="#"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe
                title="result"
                className="embed-responsive-item"
                src="#"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collect;
