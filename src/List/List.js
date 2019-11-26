import React from "react";

import Title from "../Title/Title";
import ListItems from "../ListItems/ListItems";
import listApiService from "../services/list-api-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./List.css";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      listItems: [],
      listName: null
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { new_item } = ev.target;
    const name = new_item.value;
    const listId = this.props.match.params.id;

    listApiService
      .postNewListItem(name, listId)
      .then(name =>
        this.setState({ listItems: [...this.state.listItems, name] })
      )
      .then(() => {
        new_item.value = "";
      })
      .catch(res => this.setSate({ error: res.error }));
  };

  componentDidMount() {
    const listId = this.props.match.params.id;

    listApiService
      .getListItems(listId)
      .then(listItems => this.setState({ ...listItems }));
  }

  render() {
    const items = this.state.listItems.map((item, key) => (
      <ListItems item={{ ...item }} key={key} />
    ));

    return (
      <div>
        <Title listName={this.state.listName} listType={"list"} />
        <ul className="list">
          <li className="items">
            <form className="item-name" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="new_item"
                placeholder="New Item..."
              ></input>

              <button className="submit-button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </form>
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
