import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import "./ListItems.css";

export default class ListItems extends React.Component {
  static defaultProps = {
    item: { packed: true }
  };

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
    let cssClass =
      this.state.packed === true ? "ListItems__li--packed" : "ListItems__li";
    const checkBox =
      this.state.packed === true ? (
        <FontAwesomeIcon icon={faCheckSquare} color="green" />
      ) : (
        <FontAwesomeIcon icon={faSquare} />
      );

    return (
      <li className={cssClass}>
        <div className="ListItems__checkbox" onClick={this.handleItemClick}>
          {checkBox}
        </div>
        <div className="ListItems__name" onClick={this.handleItemClick}>
          {this.props.item.name}
        </div>
        <div
          className="ListItems__control-bar"
          onClick={this.handleDeleteClick}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </li>
    );
  }
}
