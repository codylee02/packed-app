import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import "./ListItems.css";

export default class ListItems extends React.Component {
  render() {
    console.log(this.props.item);
    const cssClass = this.props.item.packed === true ? "items packed" : "items";

    return (
      <li className={cssClass}>
        <div className="item-name">{this.props.item.name}</div>
        <div className="item-control-bar">
          <FontAwesomeIcon icon={faEdit} />
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </li>
    );
  }
}
