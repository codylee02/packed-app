import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./TemplateItems.css";

export default class TemplateItems extends React.Component {
  static defaultProps = {
    item: { name: "" }
  };

  handleDeleteClick = () => {
    this.props.handleDeleteListItem(this.props.item.id);
  };

  render() {
    return (
      <li className="TemplateItems__li">
        <div className="TemplateItems__name">{this.props.item.name}</div>
        <div
          className="TemplateItems__control-bar"
          onClick={this.handleDeleteClick}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </li>
    );
  }
}
