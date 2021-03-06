import React from "react";

import "./PackingListsTab.css";
import PackingLists from "../../components/PackingLists/PackingLists";
import listApiService from "../../services/list-api-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title/Title";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      lists: []
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { new_list } = ev.target;
    const name = new_list.value;
    this.setState({ error: null });

    listApiService
      .postNewList(name)
      .then(name => this.setState({ lists: [...this.state.lists, name] }))
      .then(() => {
        new_list.value = "";
      })
      .catch(res => this.setState({ error: res.error }));
  };

  handleDeleteList = listId => {
    listApiService.deleteList(listId).then(() => {
      this.setState({
        lists: this.state.lists.filter(list => list.id !== listId)
      });
    });
  };

  componentDidMount() {
    listApiService.getLists().then(lists => this.setState({ lists: lists }));
  }
  render() {
    const lists = this.state.lists
      ? this.state.lists.map(list => (
          <PackingLists
            handleDeleteList={this.handleDeleteList}
            className="PackingLists"
            {...list}
            key={list.id}
          />
        ))
      : null;

    return (
      <div className="PackingListsTab">
        <Title listName={"Lists"} />
        <ul className="PackingListsTab__ul">
          <li className="PackingListsTab__li">
            <form
              className="PackingListsTab__form"
              onSubmit={this.handleSubmit}
            >
              <input
                name="new_list"
                type="text"
                placeholder="New List..."
                required
              ></input>
              <button type="submit" className="PackingListsTab__button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </form>
          </li>
          {lists}
        </ul>
      </div>
    );
  }
}
