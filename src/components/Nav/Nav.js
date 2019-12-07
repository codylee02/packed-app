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
      <Link to={"/lists"} className="nav-buttons" id="PackingListsButton">
        <div className="nav-icon">
          <FontAwesomeIcon icon={faList} className="nav-icons" />

          <div className="nav-label">Packing Lists</div>
        </div>
      </Link>

      <Link to="/templates" className="nav-buttons" id="TemplatesButton">
        <div className="nav-icon">
          <FontAwesomeIcon icon={faCopy} className="nav-icons" />

          <div className="nav-label">Templates</div>
        </div>
      </Link>
      <Link
        onClick={handleLogoutClick}
        to="/"
        className="nav-buttons"
        id="LogoutButton"
      >
        <div className="nav-icon">
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icons" />

          <div className="nav-label">Logout</div>
        </div>
      </Link>
    </nav>
  );
}
