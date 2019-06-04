import React, { Component } from "react";
import fire from "./config/Fire";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
        alert("Incorrect Email/Password.");
      });
  }

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div className="form-inline row">
            <label className="col-sm-5" htmlFor="exampleInputEmail1">
              Email
            </label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control col-sm-7"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your email"
            />
          </div>
          <div className="form-inline row mt-3">
            <label className="col-sm-5" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control col-sm-7"
              id="exampleInputPassword1"
              placeholder="Your Password"
            />
          </div>
          <button
            type="submit"
            onClick={this.login}
            className="mt-4 btn btn-primary col-sm-3"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
