import React from "react";

import Title from "../Title/Title";
import ListItems from "../ListItems/ListItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./List.css";

export default class List extends React.Component {
  render() {
    const itemsInList = this.props.STORE.listItems.filter(
      item => item.listId === Number(this.props.match.params.id)
    );

    const items = itemsInList.map((item, key) => (
      <ListItems item={{ ...item }} STORE={this.props.STORE} key={key} />
    ));

    return (
      <div>
        <Title
          listsId={this.props.match.params.id}
          listType={this.props.listType}
          STORE={this.props.STORE}
        />
        <ul className="list">
          <li className="items">
            <div className="item-name">
              <input type="text" placeholder="New Item..."></input>
            </div>
            <div className="item-control-bar">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </li>
          <li className="items">
            <div className="item-name">
              <select>
                <option>Add Items From Template...</option>
                <option>Overnight Trip</option>
                <option>Daily Necessities</option>
                <option>Photography Gig-Basic Package</option>
                <option>Computer Bag</option>
                <option>Beach Trip</option>
              </select>
            </div>
            <div className="item-control-bar">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </li>
          {items}
        </ul>
      </div>
    );
  }
}
