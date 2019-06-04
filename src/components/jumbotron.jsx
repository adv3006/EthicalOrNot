import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class CustomJumbotron extends Component {
  state = {};
  render() {
    return (
      <div id="home">
        <Jumbotron>
          <h1>Welcome, admin!</h1>
          <span>
            Team members: Carlos Gamino, Adrian Gozum, Thomas Do, Flynn-Henry
            Guevarra, Nhan Phan
          </span>
          <p>Instructor: Shawn Healey</p>
        </Jumbotron>
      </div>
    );
  }
}

export default CustomJumbotron;
