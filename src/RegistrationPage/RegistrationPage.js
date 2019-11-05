import React from "react";
import { Link } from "react-router-dom";

import "./RegistrationPage.css";

export default class RegistrationPage extends React.Component {
  render() {
    return (
      <section>
        <h2>Sign Up</h2>
        <h3>
          This is just an example of the page. To go back click{" "}
          <Link to="/">HERE</Link>
        </h3>
        <form class="sign-up-form">
          First Name: <input type="text" name="first-name"></input>
          <br />
          Last Name: <input type="text" name="last-name"></input>
          <br />
          Email:{" "}
          <input type="email" name="email" autoComplete="username"></input>
          <br />
          Password:{" "}
          <input
            type="password"
            name="password"
            autoComplete="new-password"
          ></input>
          <br />
          Confirm Password:{" "}
          <input
            type="password"
            name="confirm-password"
            autoComplete="new-password"
          ></input>
          <br />
          <input type="submit" value="Sign Up"></input>
        </form>
      </section>
    );
  }
}
