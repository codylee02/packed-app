import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { first_name, last_name, username, password } = ev.target;

    this.setState({ error: null });
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
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="first_name">
          <label htmlFor="RegistrationForm__first_name">
            First name <Required />
          </label>
          <Input
            name="first_name"
            type="text"
            required
            id="RegistrationForm__first_name"
          ></Input>
        </div>
        <div className="last_name">
          <label htmlFor="RegistrationForm__last_name">
            Last name <Required />
          </label>
          <Input
            name="last_name"
            type="text"
            required
            id="RegistrationForm__last_name"
          ></Input>
        </div>
        <div className="username">
          <label htmlFor="RegistrationForm__username">
            Email
            <Required />
          </label>
          <Input
            name="username"
            type="email"
            required
            id="RegistrationForm__username"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}