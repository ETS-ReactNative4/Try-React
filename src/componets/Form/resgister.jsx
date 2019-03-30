import React, { Component } from 'react'
import "../css/user/loginForm.css"
import { Link } from "react-router-dom";
import regValidator from "../validate/registerValidate"
import { FormFeedback, Input } from 'reactstrap';
import "./reg.css"
export default class Register extends Component {
  state = {
    userName: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    errors: {},
    successMsg: {}
  }
  logchangeHandler = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,

    })
  }
  passChangeHandler = event => {
    let data = regValidator(this.state)
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
      successMsg: data.passCheck
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log("working")
    let data = regValidator(this.state)
    if (data.formIsValid) {

    } else {
      this.setState({
        ...this.state,
        errors: data.errors,
        successMsg: {}
      })
    }
  }
  render() {
    let { strong, medium } = this.state.successMsg
    let { successMsg, errors } = this.state
    var colorClass = null;
    if (strong) {
      colorClass = "bg-success"
    } else if (medium) {
      colorClass = "bg-info"
    } else {
      colorClass = "bg-danger"
    }
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col-5">
            <img className="img" src={require("../../images/bg1s.png")} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2">
            <form className="form mr-3 px-3">
              <div className="form-group">
                <label>Username</label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-user " aria-hidden="true"></i></div>
                  </div>
                  <Input
                    invalid={this.state.errors.userName && true}
                    onChange={this.logchangeHandler}
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="john doe" />
                  <FormFeedback  >
                    {errors.userName}</FormFeedback>
                </div>
                <label>E-mail</label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                  </div>
                  <Input
                    invalid={errors.email && true}
                    onChange={this.logchangeHandler}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@email.com" />
                  <FormFeedback  >
                    {errors.email}</FormFeedback>
                </div>
                <label>Password</label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></div>
                  </div>
                  <Input
                    invalid={errors.password && true}
                    valid={successMsg.weak || successMsg.medium || successMsg.strong}
                    onChange={this.passChangeHandler}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******" />
                  <FormFeedback invalid>
                    {this.state.errors.password}</FormFeedback>
                  <FormFeedback className={colorClass} valid tooltip id="tooltip">{this.state.successMsg.weak || this.state.successMsg.medium || this.state.successMsg.strong}</FormFeedback>

                </div>
                <label>Confirm password</label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-lock fa" aria-hidden="true"></i></div>
                  </div>
                  <Input
                    invalid={this.state.errors.confirmPassword && true}
                    onChange={this.logchangeHandler}
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="******" />
                  <FormFeedback  >
                    {this.state.errors.confirmPassword}</FormFeedback>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" type="submit" onClick={this.submitHandler}>Register</button>
              </div>
              <small className="lead">Allready have an account?</small>
              <Link className="mb-1" to="/login"><a>login</a></Link>
              <p>Or register with</p><hr />
              <div className="d-flex">
                <i class="fa fb fa-facebook-official ml-5 mr-4 fa-icon  pointer" aria-hidden="true"></i>
                <i class="fa gp fa-google-plus mr-4 fa-icon  pointer" aria-hidden="true"></i>
                <i class="fa google fa-google mr-4 fa-icon  pointer" aria-hidden="true"></i>
                <i class="fa github fa-github mr-4 fa-icon  pointer" aria-hidden="true"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
