import React, { Component } from "react";

class Hosting extends Component {
  state = {};
  render() {
    return (
      <div id="hosting" className="mt-5">
        <br />
        <br />
        <br />
        <br />
        <h3 className="col-lg-6 text-left font-weight-bold container">
          Web Hosting
        </h3>
        <br />
        <img
          className="img-fluid h-50 w-50"
          src={require("./image/firebase+react.png")}
          alt="Firebase and React logo"
        />
      </div>
    );
  }
}

export default Hosting;
