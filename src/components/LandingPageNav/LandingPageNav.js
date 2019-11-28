import React from "react";
import { Link } from "react-router-dom";

import "./LandingPageNav.css";

export default function LandingPageNav() {
  return (
    <nav role="navigation" className="landing-page-nav">
      <Link to="/register">Register</Link> <Link to="/login">Login</Link>
    </nav>
  );
}
