import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./TemplateItems.css";

export default class TemplateItems extends React.Component {
  handleDeleteClick = () => {
    this.props.handleDeleteListItem(this.props.item.id);
  };

  render() {
    return (
      <li className="items">
        <div className="template-item-name">{this.props.item.name}</div>
        <div className="item-control-bar" onClick={this.handleDeleteClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </li>
    );
  }
}
