import React, { Component } from "react";
import VPNDemo from "./vpn-demo";

class VPN extends Component {
  render() {
    return (
      <div id="vpn" className="text-left container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="font-weight-bold">Virtual Private Network</h3>
            <span>Using PiVPN</span>
            <ol>
              <li>Simple</li>
              <ul>
                <li>Well almost!</li>
                <li>
                  <i>$ curl -L https://install.pivpn.io | bash</i>
                </li>
              </ul>
              <li>Flexible</li>
              <ul>
                <li>
                  The installer lets you customize your VPN port, certificate
                  details, key encryption strength, client DNS server
                </li>
              </ul>
              <li>Managable</li>
              <ul>
                <li>Easily add/revoke/list/... client profiles OVPN</li>
              </ul>
              <li>Secure</li>
              <ul>
                <li>AES - Encrypt data storage</li>
                <li>SHA256 - Make sure data isnt modified</li>
                <li>
                  TSL1.2 - Encrypt end-to-end communications over the networks
                </li>
              </ul>
            </ol>
          </div>
          <div className="col-lg-6">
            <img
              className="bg-secondary img-fluid"
              src={require("./image/pivpn.jpg")}
              alt="PiVPN logo"
            />
          </div>
        </div>
        <VPNDemo />
      </div>
    );
  }
}

export default VPN;
