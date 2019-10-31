import React from "react";

import "./ListName.css";

export default class ListName extends React.Component {
  render() {
    const packedItems = this.props.STORE ? 5 : null;
    const totalItems = 10;

    return (
      <li className="ListName__title">
        {this.props.name}
        <div className="ListName__count">
          {packedItems}/{totalItems} packed
        </div>
      </li>
    );
  }
}
