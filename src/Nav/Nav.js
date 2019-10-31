import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faCopy } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

export default function Nav(props) {
  return (
    <nav className="Nav">
      <Link to={"/lists"} className="nav-buttons">
        <div className="nav-icon">
          <FontAwesomeIcon icon={faList} className="nav-icons" />
        </div>
        <div className="nav-label">Lists</div>
      </Link>
      <Link to="/templates" className="nav-buttons">
        <div className="nav-icon">
          <FontAwesomeIcon icon={faCopy} className="nav-icons" />
        </div>
        <div className="nav-label">Templates</div>
      </Link>
    </nav>
  );
}
