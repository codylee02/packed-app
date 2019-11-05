import React from "react";

import LandingPageNav from "../LandingPageNav/LandingPageNav";

import "./LandingPage.css";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <LandingPageNav />
        <header role="banner">
          <h1>PAKD</h1>
          <h2>Never forget to bring your stuff</h2>
          <h3>**Click login to be taken to the app**</h3>
        </header>
        <section>
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/150" alt="placeholder"></img>
          </a>
          <p>[image placeholder for templates]</p>
          <p>Create templates, or bags for commonly packed items</p>
        </section>

        <section>
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/150" alt="placeholder"></img>
          </a>
          <p>[image placeholder for checking off items]</p>
          <p>Check off items as you gather them</p>
        </section>

        <section>
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/150" alt="placeholder"></img>
          </a>
          <p>
            [image placeholder of someone walking out the door with a backpack]
          </p>
          <p>Walk out the door ready for your day</p>
        </section>

        <section>
          <h2>Sign Up</h2>
          <form className="sign-up-form">
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
      </>
    );
  }
}
