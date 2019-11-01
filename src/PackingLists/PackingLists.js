import React from "react";
import { Link } from "react-router-dom";

import "./PackingLists.css";

export default class PackingLists extends React.Component {
  render() {
    const listId = this.props.id;

    //get the total items in each list
    const totalItems = listId => {
      let count = 0;
      for (let i = 0; i < this.props.STORE.listItems.length; i++) {
        if (listId === this.props.STORE.listItems[i].listId) {
          count++;
        }
      }
      return count;
    };

    //get the number of packed items from each list
    const packedItems = listId => {
      let count = 0;
      for (let i = 0; i < this.props.STORE.listItems.length; i++) {
        if (
          listId === this.props.STORE.listItems[i].listId &&
          this.props.STORE.listItems[i].packed === true
        ) {
          count++;
        }
      }
      return count;
    };

    return (
      <Link to={`/list/${listId}`} className="list-name__link">
        <li className="list-name">
          <div className="list-name__title">{this.props.name}</div>
          <div className="list-name__count">
            {packedItems(listId)}/{totalItems(listId)}
          </div>
        </li>
      </Link>
    );
  }
}
PackingLists.defaultProps = {
  STORE: {}
};
