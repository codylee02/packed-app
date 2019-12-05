import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";

import "./RegistrationForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class RegistrationForm extends Component {
  state = { error: null, registering: false };

  handleSubmit = ev => {
    ev.preventDefault();
    TokenService.clearAuthToken();
    const { first_name, last_name, username, password } = ev.target;

    this.setState({ error: null, registering: true });

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      password: password.value
    })
      .then(user => {
        first_name.value = "";
        last_name.value = "";
        username.value = "";
        password.value = "";
        this.setState({ registering: false });
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error, registering: false });
      });
  };

  render() {
    const { error } = this.state;
    const registerButton =
      this.state.registering === false ? (
        <Button type="submit">Register</Button>
      ) : (
        <Button>
          <FontAwesomeIcon icon={faSpinner} spin />
        </Button>
      );
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>

        <label
          className="RegistrationForm__label"
          htmlFor="RegistrationForm__first_name"
        >
          First name <Required />
        </label>
        <Input
          className="RegistrationForm__input"
          name="first_name"
          type="text"
          required
          id="RegistrationForm__first_name"
        ></Input>

        <label
          className="RegistrationForm__label"
          htmlFor="RegistrationForm__last_name"
        >
          Last name <Required />
        </label>
        <Input
          className="RegistrationForm__input"
          name="last_name"
          type="text"
          required
          id="RegistrationForm__last_name"
        ></Input>
        <label
          className="RegistrationForm__label"
          htmlFor="RegistrationForm__username"
        >
          Email <Required />
        </label>
        <Input
          className="RegistrationForm__input"
          name="username"
          type="email"
          required
          id="RegistrationForm__username"
        ></Input>
        <label
          className="RegistrationForm__label"
          htmlFor="RegistrationForm__password"
        >
          Password <Required />
        </label>
        <Input
          className="RegistrationForm__input"
          name="password"
          type="password"
          required
          id="RegistrationForm__password"
        ></Input>
        <div className="RegistrationForm__form-controls">
          <Link to={"/"}>
            <Button type="button">Cancel</Button>
          </Link>
          {registerButton}
        </div>
      </form>
    );
  }
}
