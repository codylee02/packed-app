import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./ListItems.css";

export default class ListItems extends React.Component {
  handleDeleteClick = () => {
    this.props.handleDeleteListItem(this.props.item.id);
  };

  render() {
    const cssClass = this.props.item.packed === true ? "items packed" : "items";

    return (
      <li className={cssClass}>
        <div className="item-name">{this.props.item.name}</div>
        <div className="item-control-bar" onClick={this.handleDeleteClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </li>
    );
  }
}
