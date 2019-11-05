import React from "react";
import { Link } from "react-router-dom";

import "./LandingPageNav.css";

export default class LandingPageNav extends React.Component {
  render() {
    return (
      <nav role="navigation" className="landing-page-nav">
        <Link to="/registration-page">Register</Link>{" "}
        <Link to="/lists">Login</Link>
      </nav>
    );
  }
}
