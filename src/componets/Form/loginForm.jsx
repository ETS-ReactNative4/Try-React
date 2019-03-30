import React, { Component } from 'react'
import "../css/user/loginForm.css"
import { Link } from "react-router-dom";
export default class Loginform extends Component {
  state = {
    userName: "",
    password: ""
  }
  logchangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {

    console.log(this.state)
    return (
      <div class="con mt-5">
        <form action="">
          <h5>Login</h5>
          <div class="form-content">

            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="user name"
              onChange={this.logchangeHandler}
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={this.logchangeHandler}
            />

            <br />
            <button className="btn btn-success">Login</button>
            <br />
            <div class="signup-message">
              <Link to="/auth/forgetpass"><a>Forgot your password?</a></Link>
              <p>Don't have account?</p>
              <Link to="/register"><a>Create one</a></Link>
            </div>
          </div>
        </form>

      </div>
    )
  }
}
