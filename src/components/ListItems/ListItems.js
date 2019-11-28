import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./ListItems.css";

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packed: this.props.item.packed
    };
  }

  handleDeleteClick = () => {
    this.props.handleDeleteListItem(this.props.item.id);
  };

  handleItemClick = () => {
    this.props.handlePackedToggle(this.props.item.id, this.state.packed);
    this.setState({ packed: !this.state.packed });
  };

  render() {
    let cssClass = this.state.packed === true ? "items packed" : "items";

    return (
      <li className={cssClass}>
        <div className="item-name" onClick={this.handleItemClick}>
          {this.props.item.name}
        </div>
        <div className="item-control-bar" onClick={this.handleDeleteClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </li>
    );
  }
}
