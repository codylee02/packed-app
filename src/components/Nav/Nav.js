import React from "react";
import { Link } from "react-router-dom";

import TokenService from "../../services/token-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faCopy,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

export default function Nav(props) {
  function handleLogoutClick() {
    TokenService.clearAuthToken();
  }

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
      <Link onClick={handleLogoutClick} to="/" className="nav-buttons">
        <div className="nav-icon">
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icons" />
        </div>
        <div className="nav-label">Logout</div>
      </Link>
    </nav>
  );
}
