import React, { Component } from "react";

class VPNDemo extends Component {
  state = {};
  render() {
    return (
      <div className="text-left container mt-5">
        <h3 className="font-weight-bold text-left container">
          VPN connectivity demo
        </h3>
        <br />
        <div className="embed-responsive embed-responsive-4by3">
          <iframe
            title="vpn-demo-1"
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/S-umK9_LqM8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default VPNDemo;
