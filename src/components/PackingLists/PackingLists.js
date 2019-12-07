import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./PackingLists.css";

export default class PackingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeleteClick = () => {
    this.props.handleDeleteList(this.props.id);
  };

  render() {
    return (
      <li className={`PackingLists__li`}>
        <NavLink to={`/list/${this.props.id}`} className="PackingLists__link">
          <div className="PackingLists__title">{this.props.name}</div>{" "}
        </NavLink>
        <div className="PackingLists__controls">
          <button
            className="PackingLists__delete-button"
            onClick={this.handleDeleteClick}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </li>
    );
  }
}
