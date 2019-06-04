import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Device extends Component {
  render() {
    return (
      <div id="device" class="mt-5 bg-light text-dark">
        <h3 className="font-weight-bold text-left container">
          Raspberry Pi as the generative device
        </h3>
        <br />
        <Carousel interval="3000">
          <Carousel.Item>
            <img
              className="h-50"
              src={require("./image/pi_1.jpeg")}
              alt="Raspberry Pi #1"
            />
            <Carousel.Caption>
              <p>Raspberry Pi #1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="h-50"
              src={require("./image/pi_2.jpg")}
              alt="Raspberry Pi #2"
            />
            <Carousel.Caption>
              <p>Raspberry Pi #2</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="h-50"
              src={require("./image/pi_3.jpg")}
              alt="Raspberry Pi #3"
            />
            <Carousel.Caption>
              <p>Raspberry Pi #3</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Device;
