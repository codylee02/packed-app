import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import { Button, Input } from "../Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./LoginForm.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null, loggingIn: false };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null, loggingIn: true });
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = "";
        password.value = "";
        this.setState({ loggingIn: false });
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error, loggingIn: false });
      });
  };
  render() {
    const { error } = this.state;
    const loginButton =
      this.state.loggingIn === false ? (
        <Button type="submit">Login</Button>
      ) : (
        <Button>
          <FontAwesomeIcon icon={faSpinner} spin />
        </Button>
      );
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <label className="LoginForm__label" htmlFor="LoginForm__username">
          Email
        </label>
        <Input
          className="LoginForm__input"
          required
          name="username"
          id="LoginForm__username"
        ></Input>
        <label className="LoginForm__label" htmlFor="LoginForm__password">
          Password
        </label>
        <Input
          className="LoginForm__input"
          required
          name="password"
          type="password"
          id="LoginForm__password"
        ></Input>
        <div className="LoginForm__form-controls">
          <Link to={"/"}>
            <Button type="button">Cancel</Button>
          </Link>
          {loginButton}
        </div>
      </form>
    );
  }
}
