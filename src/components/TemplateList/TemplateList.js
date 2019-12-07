import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TemplateList.css";

export default class TemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeleteClick = () => {
    this.props.handleDeleteTemplate(this.props.id);
  };

  render() {
    return (
      <li className="TemplateList__li">
        <NavLink
          to={`/template/${this.props.id}`}
          className="TemplateList__link"
        >
          <div className="TemplateList__title">{this.props.name}</div>
        </NavLink>
        <div className="TemplateList__controls">
          <button
            className="TemplateList__delete-button"
            onClick={this.handleDeleteClick}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </li>
    );
  }
}
