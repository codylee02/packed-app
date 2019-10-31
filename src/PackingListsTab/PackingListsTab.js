import React from "react";

import "./PackingListsTab.css";
import PackingLists from "../PackingLists/PackingLists";

export default class Lists extends React.Component {
  render() {
    const lists = this.props.STORE.lists
      ? this.props.STORE.lists.map((listName, key) => (
          <PackingLists
            className="list-name"
            {...listName}
            STORE={this.props.STORE}
            key={key}
          />
        ))
      : null;

    return <ul className="Lists">{lists}</ul>;
  }
}
