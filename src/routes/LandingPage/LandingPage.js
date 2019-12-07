import React from "react";

import LandingPageNav from "../../components/LandingPageNav/LandingPageNav";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

import "./LandingPage.css";

export default function LandingPage(props) {
  function handleRegistrationSuccess(user) {
    const { history } = props;
    history.push("/login");
  }

  return (
    <>
      <LandingPageNav />
      <header role="banner">
        <h1>PAKD</h1>
        <h1>
          <FontAwesomeIcon icon={faBoxOpen} color="#5401ff" />
        </h1>
        <h2>Never forget to pack your stuff</h2>
      </header>
      <section>
        <img
          className="LandingPage__img"
          src={require("./images/templates-tab.png")}
          alt="templates example"
        ></img>
        <p>Create templates for commonly packed items</p>
      </section>

      <section>
        <img
          className="LandingPage__img"
          src={require("./images/list-example.png")}
          alt="checklist example"
        ></img>
        <p>
          Check off items as you gather them and walk out the door ready for
          your day
        </p>
      </section>

      <section className="RegistrationPage">
        <h2>Sign Up</h2>
        <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
      </section>
    </>
  );
}

LandingPage.defaultProps = {
  history: {
    push: () => {}
  }
};
