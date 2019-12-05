import React from "react";

import LandingPageNav from "../../components/LandingPageNav/LandingPageNav";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";

import "./LandingPage.css";

export default function LandingPage(props) {
  return (
    <>
      <LandingPageNav />
      <header role="banner">
        <h1>PAKD</h1>
        <h2>Never forget to pack your stuff</h2>
      </header>
      <section>
        <a href="https://placeholder.com">
          <img src="https://via.placeholder.com/150" alt="placeholder"></img>
        </a>
        <p>[image placeholder for templates]</p>
        <p>Create templates for commonly packed items</p>
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

      <RegistrationPage />
    </>
  );
}

LandingPage.defaultProps = {
  history: {
    push: () => {}
  }
};
